from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager
from datetime import timedelta
from dotenv import load_dotenv
from flask_jwt_extended import JWTManager

load_dotenv()
import os
POSTGRES_URI =  os.getenv("POSTGRES_URI")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = POSTGRES_URI
app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=3)
jwt = JWTManager(app)
db = SQLAlchemy(app)
login = LoginManager(app)
CORS(app)

from .routes import routes
from .auth import auth

app.register_blueprint(auth)
app.register_blueprint(routes)

with app.app_context():
    db.create_all()