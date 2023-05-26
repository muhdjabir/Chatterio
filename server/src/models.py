from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from src import db

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(), nullable = False)
    email = db.Column(db.String(), nullable = False, unique = True)
    password_hash = db.Column(db.String())

    def __repr__(self):
        return f'User: {self.id} {self.username} {self.email}'
    
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

def format_user(user):
    return {
        "id": user.id,
        "email": user.email,
        "username": user.username
    }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'Category: {self.id} User: {self.user} Name: {self.name}'

    def __init__(self, user, name):
        self.user = user
        self.name = name

def format_category(category):
    return {
        "id": category.id,
        "user_id": category.user_id,
        "name": category.name
    }



class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(), nullable=False)
    status = db.Column(db.String(), nullable=False, default="Pending")
    category_id = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, nullable=False)
    due = db.Column(db.Date, nullable=False)

    def __repr__(self):
        return f'To Do: {self.description}'
    
    def __init__(self, name, description, due, category):
        self.name = name
        self.description = description
        self.due = due
        self.category = category


def format_todo(todo):
    return {
        "id": todo.id,
        "name": todo.name,
        "description": todo.description,
        "status": todo.status,
        "due": todo.due,
        "category_id": todo.category_id
    }

class Relationship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    requester_id = db.Column(db.Integer, nullable=False)
    requestee_id = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(), nullable=False, default="Pending")

    def __init__(self, requester, requestee):
        self.requester_id = requester
        self.requestee_id = requestee
    
def format_relationship(relationship):
    return {
        "id": relationship.id,
        "requester_id": relationship.requester_id,
        "requestee_id": relationship.requestee_id,
        "status": relationship.status
    }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)
    participants = db.Column(db.ARRAY(db.String()))

    def __init__(self, description, start_date, end_date, participants):
        self.description = description
        self.start_date = start_date
        self.end_date = end_date
        self.participants = participants

def format_event(event):
    return {
        "id": event.id,
        "description": event.description,
        "start_date": event.start_date,
        "end_date": event.end_date,
        "participants": event.participants
    }

