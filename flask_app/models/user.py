from flask_app import DB, bcrypt
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class User:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.location = data['location']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    #GET ALL USERS FROM DB
    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users;"
        users_from_db = connectToMySQL(DB).query_db(query)
        users = []
        for user in users_from_db:
            users.append(user)
        return users

    #SAVE A USER IN DB
    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name,last_name,email,location,password,created_at,updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,%(location)s,%(password)s,NOW(),NOW());"
        user_id = connectToMySQL(DB).query_db(query,data)
        return user_id

    #GET USER BY ID
    @classmethod
    def get_user_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        user_from_db = connectToMySQL(DB).query_db(query,data)
        return cls(user_from_db)

    #DELETE USER
    @classmethod
    def delete_user(cls,data):
        query = 'DELETE FROM users WHERE id = %(id)s;'
        return connectToMySQL(DB).query_db(query,data)

    #EDIT USER
    @classmethod
    def edit_user(cls,data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query,data)

    #ALTERNATE GET ONE USER
    @classmethod
    def get_one_user(cls,**data):
        query = "SELECT * FROM users WHERE "
        where_str = ' AND '.join(f"{key}=%({key})s" for key in data)
        query += where_str + ';'
        results = connectToMySQL(DB).query_db(query,data)
        if results:
            return cls(results[0])

    #REGISTRATION VALIDATION
    @staticmethod
    def validate_register(data):
        errors = {}
        if len(data['first_name']) < 2:
            errors['first_name'] = 'First name should be at least 2 characters'
        if len(data['last_name']) < 2:
            errors['last_name'] = 'Last name should be at least 2 characters'
        if not EMAIL_REGEX.match(data['email']):
            errors['email'] = 'Email format is invalid'
        elif User.get_one_user(email=data['email']):
            errors['email'] = 'Email is already in use'
        if len(data['password']) < 8:
            errors['password'] = 'Password should be at least 8 characters'
        elif data['password'] != data['confirmPass']:
            errors['confirmPass'] = 'Passwords do not match'
        if len(data['location']) < 2:
            errors['location'] = 'Location should be at least 2 characters'
        
        for field,msg in errors.items():
            flash(msg,field)
        
        return len(errors) == 0

    #LOGIN VALIDATION
    @staticmethod
    def validate_login(data):
        errors = {}
        user = User.get_one_user(email=data['login_email'])
        if not user:
            errors['login'] = "Invalid Credentials"
        elif not bcrypt.check_password_hash(user.password,data['password']):
            errors['login'] = 'Invalid Credentails'
        
        for field,msg in errors.items():
            flash(msg,field)

        return len(errors) == 0