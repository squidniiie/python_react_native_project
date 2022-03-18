from flask_app import app
from flask_app.controllers import users, vendors

if __name__ == "__main__":   
    app.run(host='127.0.0.1', port=5000, debug=True)


