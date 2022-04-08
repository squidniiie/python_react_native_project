# __init__.py
from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
app = Flask(__name__)
cors = CORS(app, supports_credentials=True)
app.secret_key = "shhhhhh"
bcrypt = Bcrypt(app)
DB = 'python_react_native'
