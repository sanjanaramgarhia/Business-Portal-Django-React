from pydantic import BaseModel

class TaskSchema(BaseModel):
    title: str
    description: str
    is_completed: int = 0  # Default value is 0 (not completed)

    class Config:
        orm_mode = True
