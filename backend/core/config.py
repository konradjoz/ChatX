import os
from typing import List, Optional
from pydantic import BaseSettings, AnyHttpUrl


class Settings(BaseSettings):
    # PROJECT SETTINGS
    PROJECT_NAME: str = "ChatX"
    PROJECT_VERSION: str = "v0.0.1"
    PROJECT_AUTHOR: str = "Konrad Jozefczyk"
    PROJECT_API_PREFIX: str = "/api/v1/"

    # MONGO SETTINGS (USE ENVIROMENT VARIABLES)
    MONGODB_USERNAME: str = os.getenv("MONGODB_USERNAME")
    MONGODB_PASSWORD: str = os.getenv("MONGODB_PASSWORD")
    MONGODB_CLUSTER: str = os.getenv("MONGODB_CLUSTER")

    MONGODB_URI: str = f"mongodb+srv://{MONGODB_USERNAME}:{MONGODB_PASSWORD}@{MONGODB_CLUSTER}/test?authSource=admin&replicaSet=atlas-iobheh-shard-0&readPreference=primary&appname=MongoDB+Compass&ssl=true"
    MONGODB_DATABASE_NAME: str = "ChatX"

    # List of allowed origins (include React Host and Port)
    BACKEND_ORIGINS: List[AnyHttpUrl] = [
        # Port 3000 Reserved for React
        "http://localhost:3000",
        # Port 8000 Reserved for FastAPI
        "http://localhost:8000"
    ]

    # SERVER SETTINGS
    BACKEND_SERVER_HOST: AnyHttpUrl = "http://localhost"
    BACKEND_SERVER_PORT: Optional[int] = 8000

    class Config:
        case_sensitive = True


settings = Settings()
