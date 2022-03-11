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
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    #GET ALL USERS FROM DB
    @classmethod
    def get_all_users(cls):
        query = "SELECT * FROM users"
        users_from_db = connectToMySQL(DB).query_db(query)
        users = []
        for user in users_from_db:
            users.append(cls(user))
        return users

    #SAVE A USER IN DB
    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name,last_name,email,created_at,updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,NOW(),NOW());"
        user_id = connectToMySQL(DB).query_db(query,data)
        return user_id

    #GET USER BY ID
    @classmethod
    def get_user_by_id(cls,data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        user_from_db = connectToMySQL(DB).query_db(query,data)
        return cls(user_from_db)

    #ALTERNATE GET ONE USER
    @classmethod
    def get_one_user(cls,**data):
        query = "SELECT * FROM users WHERE "
        where_str = ' AND '.join(f"{key}=%({key})s" for key in data)
        query += where_str + ';'
        results = connectToMySQL(DB).query_db(query,data)
        if results:
            return cls(results[0])
