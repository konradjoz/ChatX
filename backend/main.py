import datetime
import json
import logging
import os
from typing import List

from pymongo import errors as e
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from starlette.websockets import WebSocketState

from backend.database.mongodb import getDatabase, connect, disconnect
from backend.sockets.socket import ConnectionManager
from backend.core.config import settings

app = FastAPI(
    host=settings.BACKEND_SERVER_HOST,
    port=settings.BACKEND_SERVER_PORT,
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION,
    author=settings.PROJECT_AUTHOR
)

# Allows backend (FastAPI) and (React) to communicate with each other.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def backendStartUpEvent():
    await connect()
    newClient = await getDatabase()
    database = newClient[settings.MONGODB_DATABASE_NAME]

    try:
        database.create_collection("Users")
    except e.CollectionInvalid as error:
        print(error)
        pass
    try:
        userCollection = database.Users
        userCollection.create_index("client_id", name="client_id", unique=True)
        userCollection.create_index("isOnline", name="isOnline")
    except e.CollectionInvalid as error:
        print(e + "")
        pass


@app.on_event("shutdown")
async def backendShutdownEvent():
    await disconnect()


@app.get("/api/users")
async def getOnlineUsers() -> dict:
    newClient = await getDatabase()

    database = newClient[settings.MONGODB_DATABASE_NAME]

    userData = list(database.Users.find({}, {"_id": 0, "client_id": 1, "isOnline": 1}))

    return {"data": (userData)}


manager = ConnectionManager()


@app.websocket("/ws/{client_id}")
async def userWebSocketEndpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)

    newClient = await getDatabase()
    database = newClient[settings.MONGODB_DATABASE_NAME]

    mydict = {"client_id": client_id, "isOnline": True}
    try:
        database.Users.insert_one(mydict)
    except:
        pass

    wsState = websocket.application_state

    now = datetime.datetime.now()
    current_time = now.strftime("%H:%M")
    print(f"At {current_time}: \n User:{client_id} has connected.")

    try:
        while True:
            data = await websocket.receive_text()
            print(f"At {current_time}: \n User:{client_id} has sent message '{data}'")
            message = {
                "time": current_time,
                "clientId": client_id,
                "message": data
            }
            await manager.broadcast(json.dumps(message))

    except WebSocketDisconnect:
        print(f"At {current_time}: \n User:{client_id} has disconnected.")
        message = {"time": current_time, "clientId": client_id, "message": f"{client_id} has disconnected"}

        await updateUserState(client_id, False)
        await manager.disconnect(websocket)


@app.get("/users/update/{client_id}/{status}")
async def updateUserState(client_id: int, status: bool):
    newClient = await getDatabase()
    database = newClient[settings.MONGODB_DATABASE_NAME]

    match = {"client_id": client_id}
    statusUpdate = {"$set": {"isOnline": status}}

    database.Users.update_one(match, statusUpdate)


# Default Exception Route ()
'''
@app.exception_handler(StarletteHTTPException)
async def exception_handler(request: Request, exc: StarletteHTTPException):
# print(exc.status_code, exc.detail)
error_status = exc.status_code
# Generic error page
return JSONResponse({
    'request': request,
    'error_status': error_status,
    'detail': exc.detail
})
'''
