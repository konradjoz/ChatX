from pydantic import BaseModel
from typing import Optional


class User(BaseModel):
    client_id: str
    username: str
    first_name: str
    last_name: str
    email: str
    join_time: str
    leave_time: str
    status: bool
    preferences: {}

    useragent: str
    ip_address: str
    country: str
    city: str

    messages = {}


class Room(BaseModel):
    id: int
    room_id: int
    name: str
    created_by: User
    created_at: str = None
    updated_at: str = None
    uptime: str
    users: list = []
    messages: list = []


class Message(BaseModel):
    id: int
    message_id: int
    room: str
    user: str
    content: str
    created_at: str
    updated_at: str = None
