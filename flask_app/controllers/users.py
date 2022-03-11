# users.py
from crypt import methods

import bcrypt
from flask_app import app, bcrypt
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User
from flask_app.models.vendor import Vendor

#LOGIN/REG PAGE ROUTE
@app.route('/')
def index():
    return 'render_template('')'

#HOME PAGE/DASHBOARD ROUTE FOR USER
@app.route('/dashboard')
def dashboard():
    if 'id' not in session:
        return redirect('/')
    user = User.get_one_user(id=session('id'))
    vendors = Vendor.get_all_vendors()
    return render_template('/dashboard.html', user=user, vendors=vendors)

#REGISTER A USER ROUTE
@app.route('/register', methods=['POST'])
def register():
    if not User.validate_register(request.form):
        return redirect('/')
    user_data = {
        **request.form,
        'password' : bcrypt.generate_password_hash(request.form['password'])
    }
    session['id'] = User.save(user_data)
    return redirect('/dashboard')

#LOGIN A USER ROUTE
@app.route('/login', methods=['POST'])
def login():
    if not User.validate_login(request.form):
        return redirect('/')
    session['id'] = User.get_one_user(email = request.form['login_email']).id
    return redirect('/dashboard')

#LOGOUT ROUTE
@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')