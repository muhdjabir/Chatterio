from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:amir159874@localhost/chatter'
db = SQLAlchemy(app)
CORS(app)

from .routes import routes

app.register_blueprint(routes)

from .models import Todo