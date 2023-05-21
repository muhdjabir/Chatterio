from flask import Blueprint, request
from .models import Todo, format_todo
from src import db

routes = Blueprint('routes', __name__)

@routes.route("/", methods= ["GET"])
def hello():
    return 'Hello There'

@routes.route("/todo", methods = ["POST"])
def create_todo():
    description = request.json['description']
    due = request.json['due']
    todo = Todo(description, due)
    db.session.add(todo)
    db.session.commit()
    return format_todo(todo)

@routes.route("/todo", methods = ["GET"])
def get_todos():
    todos = Todo.query.order_by(Todo.id.asc()).all()
    todo_list = []
    for todo in todos:
        todo_list.append(format_todo(todo))
    return {'todos': todo_list}

@routes.route("/todo/<id>", methods = ["GET"])
def get_todo(id):
    todo = Todo.query.filter_by(id = id).one()
    formatted_todo = format_todo(todo)
    return { 'todo': formatted_todo}

@routes.route("/todo/<id>", methods = ["DELETE"])
def delete_todo(id):
    todo = Todo.query.filter_by(id = id).one()
    db.session.delete(todo)
    db.session.commit()
    return f'Event (id: {todo.id}, Item: {todo.description})'

@routes.route("/todo/<id>", methods = ["PATCH"])
def update_event(id):
    todo = Todo.query.filter_by(id=id)
    status = request.json['status']
    todo.update(dict(status = status))
    db.session.commit()
    return {'todo': format_todo(todo.one())}
