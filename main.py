from fastapi import FastAPI, Request
from src.utils.settings import settings
from src.tasks.models import TaskModel
from src.tasks.urls import task_routes
from src.utils.db import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(task_routes)
