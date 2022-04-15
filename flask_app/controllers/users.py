# users.py
from crypt import methods
from distutils import errors
from email import message
from flask_app import app, bcrypt
from flask import get_flashed_messages,request,session, jsonify
from flask_app.models.user import User
from flask_app.models.post import Post
from flask_app.controllers.posts import *



# SESSION ID LOGIN
@app.route('/home', methods=['GET'])
def home():
    if 'id' not in session:
        return jsonify({"error" : "Unauthorized"})
    user = User.get_one_user(id = session['id'])
    posts = Post.get_posts_by_user({'user_id' : session['id']})
    if posts:
        return jsonify(user = user.__dict__, posts=posts)
    else:
        print("Hello", user.first_name)
        return jsonify(user = user.__dict__)

#HOME PAGE/DASHBOARD ROUTE FOR USER
@app.route('/users/<int:id>', methods=['GET'])
def show_user(id):
    print("first", id)
    user= User.get_one_user(id=id)
    print("hola",user.__dict__)
    return jsonify(user=user.__dict__)

# UPDATE USER ROUTE
@app.route('/update/<int:id>', methods=['PUT'])
def update_user(id):
    print("hello", id)
    user_data = {
        **request.get_json(),
        'id':id
        }
    print("This is Context", user_data)
    user = User.edit_user(user_data)
    print(user)
    return jsonify(id=id)
    

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
        messages = get_flashed_messages(with_categories='true')
        errs = {}
        for category,description in messages:
            # print(category + ":" + description)
            errs[category] = description
        print(errs)
        return jsonify(message = 'There was an error', errs=errs)
    # user_exists = User.get_one_user(email=user_data['email'])
    # if user_exists:
    #     return jsonify(message='User already exists')
    password = user_data['password']
    print(password)
    if 'image' in user_data:
        user_data = {
            **request.get_json(),
            'password' : bcrypt.generate_password_hash(password).decode('utf-8')
        }
    else:
        user_data = {
            **request.get_json(),
            'password' : bcrypt.generate_password_hash(password).decode('utf-8'),
            'image' : ""
        }
    print(user_data)
    user = User.save(user_data)
    print(user)
    session['id'] = user
    # session['id] = user.id
    print(session['id'])
    return jsonify(user=user)

#LOGIN A USER ROUTE
@app.route('/login', methods=['POST'])
def login():
    user_data = request.get_json()
    if not User.validate_login(user_data):
        messages = get_flashed_messages(with_categories='true')
        login_errors = {}
        for category,description in messages:
            login_errors[category] = description
        return jsonify(message = 'There was an error', loginErrors = login_errors)
    logged_in_user = User.get_one_user(email = user_data['email'])
    print("Logged in User: ", logged_in_user.__dict__)
    session['id'] = logged_in_user.id
    return jsonify(logged_in_user=logged_in_user.__dict__)


# DELETE ROUTE
@app.route('/delete/<int:id>', methods=['DELETE'])
def delete_user(id):
    user_data = {
        'id':id
        }
    delete = User.delete_user(user_data)
    print(delete)
    return jsonify(id=id)

#LOGOUT ROUTE
@app.route('/logout')
def logout():
    session.clear()
    return "Logged out"