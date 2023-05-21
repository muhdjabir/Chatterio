from flask_sqlalchemy import SQLAlchemy
from src import db

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(100), nullable=False)
    status = db.Column(db.String(20), nullable=False, default="Pending")
    due = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f'To Do: {self.description}'
    
    def __init__(self, description, due, status="Pending"):
        self.description = description
        self.due = due
        self.status = status

def format_todo(todo):
    return {
        "id": todo.id,
        "description": todo.description,
        "status": todo.status,
        "due": todo.due
    }