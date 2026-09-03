from src.tasks.dtos import TaskSchema
from src.tasks.models import TaskModel
from sqlalchemy.orm import Session

def create_task(body: TaskSchema, db:session):
    new_task = TaskModel(
        title=body.title,
        description=body.description,
        is_completed=body.is_completed
    )
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

def get_tasks(db: Session):
    tasks = db.query(TaskModel).all()
    return {"tasks": tasks}
