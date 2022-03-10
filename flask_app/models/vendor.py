from flask_app.config.mysqlconnection import connectToMySQL

class Vendor:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM vendors"
        vendors_from_db = connectToMySQL('vendors').query_db(query)
        vendors = []
        for vendor in vendors_from_db:
            vendors.append(vendor)
        return vendors