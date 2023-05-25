from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_login import LoginManager
from dotenv import load_dotenv
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, unset_jwt_cookies, jwt_required, JWTManager

load_dotenv()
import os
POSTGRES_URI =  os.getenv("POSTGRES_URI")
JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = POSTGRES_URI
app.config['JWT_SECRET_KEY'] = JWT_SECRET_KEY
jwt = JWTManager(app)
db = SQLAlchemy(app)
login = LoginManager(app)
CORS(app)

from .routes import routes
from .auth import auth

app.register_blueprint(auth)
app.register_blueprint(routes)

from .models import Todo
from .models import User

with app.app_context():
    db.create_all()