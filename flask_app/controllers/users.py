# users.py
from crypt import methods
from distutils import errors
from flask_app import app, bcrypt
from flask import get_flashed_messages, redirect,request,session,flash, jsonify, json
from flask_app.models.user import User
from flask_app.models.vendor import Vendor

#LOGIN/REG PAGE ROUTE
# s

#HOME PAGE/DASHBOARD ROUTE FOR USER
@app.route('/dashboard', methods=['GET', 'PUT'])
def dashboard():
    # if 'id' not in session:
    #     return redirect('/')
    # id=session('id')
    user = User.get_one_user()
    # vendors = Vendor.get_all_vendors()
    return jsonify(user=user)

#SAMPLE ROUTE TO RETRIEVE ALL USERS
@app.route('/getusers', methods=['GET'])
def get_users():
    users = User.get_all_users()
    return jsonify(users=users)

#REGISTER A USER ROUTE
@app.route('/register', methods=['POST'])
def register():
    print('in register route')
    print(request.get_json())
    user_data = request.get_json()
    if not User.validate_register(user_data):
        messages = get_flashed_messages()
        return jsonify(message = 'There was an error', messages=messages)
    password = user_data['password']
    print(password)
    # password = request.get_json('password')
    # # location = request.body['location']
    # print('in register route')
    # print(request.get_json())
    user_data = {
        **request.get_json(),
        'password' : bcrypt.generate_password_hash(password)
    }
    print(user_data)
    user = User.save(user_data)
    print(user)
    session['id'] = user
    print(session['id'])
    return jsonify(user=user)

#LOGIN A USER ROUTE
@app.route('/login', methods=['POST'])
def login():
    user_data = request.get_json()
    if not User.validate_login(request.json):
        return jsonify(message = 'There was an error')
    logged_in_user = User.get_one_user(email = user_data['email'])
    session['id'] = logged_in_user.id
    return jsonify(logged_in_user=logged_in_user)

#LOGOUT ROUTE
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')