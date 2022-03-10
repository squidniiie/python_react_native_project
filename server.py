from flask_app import app
from flask_app.controllers import users
# ...server.py


@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello Squidniee!'  # Return the string 'Hello World!' as a response
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.


