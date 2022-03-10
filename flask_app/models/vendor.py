class Vendor:
    def __init__(self, data) -> None:
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']