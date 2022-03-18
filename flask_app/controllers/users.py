# users.py
from crypt import methods
from distutils import errors
from flask_app import app, bcrypt
from flask import redirect,request,session,flash, jsonify, json
from flask_app.models.user import User
from flask_app.models.vendor import Vendor

#LOGIN/REG PAGE ROUTE
# s

#HOME PAGE/DASHBOARD ROUTE FOR USER
@app.route('/dashboard')
def dashboard():
    if 'id' not in session:
        return redirect('/')
    user = User.get_one_user(id=session('id'))
    vendors = Vendor.get_all_vendors()
    return jsonify(user=user, vendors=vendors)

#SAMPLE ROUTE TO RETRIEVE ALL USERS
@app.route('/getusers', methods=['GET'])
def get_users():
    users = User.get_all_users()
    return jsonify(users=users)

#REGISTER A USER ROUTE
@app.route('/register', methods=['POST'])
def register():
    password = request.get_json('password')
    # location = request.body['location']
    print('in register route')
    print(request.get_json())
    user_data = {
        **request.get_json(),
        'password' : bcrypt.generate_password_hash(password)
    }
    print(user_data)
    user = User.save(user_data)
    print(user)
    # session['id'] = User.save(user_data)
    return jsonify(user=user)

#LOGIN A USER ROUTE
@app.route('/login', methods=['POST'])
def login():
    if not User.validate_login(request.json):
        return redirect('/')
    session['id'] = User.get_one_user(email = request.json['login_email']).id
    return redirect('/dashboard')

#LOGOUT ROUTE
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')