from fastapi import FastAPI, Request
from src.utils.settings import settings
from src.tasks.models import TaskModel

Base.metadata.create_all(bind=engine)


app = FastAPI()
