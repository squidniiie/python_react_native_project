from flask_app import DB
from flask_app.config.mysqlconnection import connectToMySQL

class Vendor:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    #GET ALL VENDORS FROM DB
    @classmethod
    def get_all_vendors(cls):
        query = "SELECT * FROM vendors;"
        vendors_from_db = connectToMySQL(DB).query_db(query)
        vendors = []
        for vendor in vendors_from_db:
            vendors.append(vendor)
        return vendors

    #SAVE A VENDOR IN DB
    @classmethod
    def save(cls,data):
        query = "INSERT INTO vendors (name,location,email,created_at,updated_at) VALUES (%(name)s,%(location)s,%(email)s,NOW(),NOW());"
        vendor_id = connectToMySQL(DB).query_db(query,data)
        return vendor_id

    #GET VENDOR BY ID
    @classmethod
    def get_vendor_by_id(cls,data):
        query = "SELECT * FROM vendors WHERE id = %(id)s;"
        vendor_from_db = connectToMySQL(DB).query_db(query,data)
        return cls(vendor_from_db)

    #EDIT VENDOR
    @classmethod
    def edit_vendor(cls,data):
        query = "UPDATE vendors SET name = %(name)s, location = %(location)s, email = %(email)s, updated_at = NOW() WHERE id = %(id)s;"
        return connectToMySQL(DB).query_db(query,data)

    #ALTERNATE GET ONE VENDOR
    @classmethod
    def get_one_vendor(cls,**data):
        query = "SELECT * FROM vendors WHERE "
        where_str = ' AND '.join(f"{key}=%({key})s" for key in data)
        query += where_str + ';'
        results = connectToMySQL(DB).query_db(query,data)
        if results:
            return cls(results[0])