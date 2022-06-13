from pymongo import MongoClient

from backend.core.config import settings


class MongoDB:
    client: MongoClient = None


database = MongoDB()


async def getDatabase() -> MongoClient:
    return database.client


async def connect():
    database.client = MongoClient(settings.MONGODB_URI)
    print("Connected to MongoDB database.")


async def disconnect():
    database.client.close()
    print("Disconnected from MongoDB database.")
