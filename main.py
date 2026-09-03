from fastapi import FastAPI, Request
from src.utils.settings import settings

Base.metadata.create_all(bind=engine)


app = FastAPI()
