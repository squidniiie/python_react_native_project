# users.py
from crypt import methods

import bcrypt
from flask_app import app, bcrypt
from flask import render_template,redirect,request,session,flash
from flask_app.models.user import User

@app.route('/')
def index():
    return render_template('')

@app.route('/register', methods='POST')
def register():
    if not User.validate_register(request.form):
        return redirect('/')
    user_data = {
        **request.form,
        'password' : bcrypt.generate_password_hash(request.form['password'])
    }
    session['id'] = User.save(user_data)
    return redirect('/dashboard')

@app.route('/login', methods=['POST'])
def login():
    if not User.validate_login(request.form):
        return redirect('/')
    session['id'] = User.get_one_user(email = request.form['login_email']).id
    return redirect('/dashboard')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')