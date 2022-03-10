from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self,data) -> None:
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users"
        users_from_db = connectToMySQL('users').query_db(query)
        users = []
        for user in users_from_db:
            users.append(cls(user))
        return users

