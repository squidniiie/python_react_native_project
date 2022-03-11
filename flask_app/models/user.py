from flask_app.config.mysqlconnection import connectToMySQL

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
    def get_all(cls):
        query = "SELECT * FROM users"
        users_from_db = connectToMySQL('users').query_db(query)
        users = []
        for user in users_from_db:
            users.append(cls(user))
        return users

    #SAVE A USER IN DB
    @classmethod
    def save(cls,data):
        query = "INSERT INTO users (first_name,last_name,email,created_at,updated_at) VALUES (%(first_name)s,%(last_name)s,%(email)s,NOW(),NOW());"
        user_id = connectToMySQL('users').query_db(query,data)
        return user_id
