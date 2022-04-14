from flask_app import DB
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash


class Post:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.title = data['title']
        self.description = data['description']
        self.image = data['image']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.user_id = data['user_id']
        self.vendor_id = data['vendor_id']

    #GET ALL POSTS FROM DB
    @classmethod
    def get_all_posts(cls):
        query = "SELECT * FROM posts;"
        posts_from_db = connectToMySQL(DB).query_db(query)
        posts = []
        for post in posts_from_db:
            posts.append(post)
        return posts

    #CREATE A POST IN DB
    @classmethod
    def create(cls,data):
        query = "INSERT INTO posts (title,description,image,created_at,updated_at,user_id) VALUES (%(title)s,%(description)s,%(image)s,NOW(),NOW(),%(user_id)s);"
        post_id = connectToMySQL(DB).query_db(query,data)
        return post_id

    #GET A POST BY ITS ID
    @classmethod
    def get_post_by_id(cls,data):
        query = "SELECT * FROM posts WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query,data)

    #GET ALL POSTS MADE BY USER
    @classmethod
    def get_posts_by_user(cls,data):
        query = "SELECT * FROM posts WHERE user_id = %(user_id)s"
        return connectToMySQL(DB).query_db(query,data)

    #EDIT POST (DO WE WANT THIS?)
    @classmethod
    def edit_post(cls,data):
        query = "UPDATE posts SET title = %(title)s, description = %(description)s, image = %(image)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query,data)

    #DELETE POST
    @classmethod
    def delete_post(cls,data):
        query = "DELETE FROM posts WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query,data)

    #POST VALIDATION
    @staticmethod
    def validate_post(data):
        errors = {}
        if len(data['title']) < 2:
            errors['title'] = 'Title must be at least 2 characters long'
        if len(data['description']) < 2:
            errors['description'] = 'Description must be at least 2 characters long'
        for field,msg in errors.items():
            flash(msg,field)
        return len(errors) == 0