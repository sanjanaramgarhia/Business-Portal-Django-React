from sqlalchemy import column, Integer, String
from src.utils.db import Base

class TaskModel(Base):
    __tablename__ = "tasks"

    id = column(Integer, primary_key=True, index=True)
    title = column(String, index=True)
    description = column(String, index=True)
    is_completed = column(Integer, default=0)  # 0 for not completed, 1 for completed
