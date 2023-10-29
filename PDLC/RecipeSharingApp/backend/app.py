from flask import Flask, jsonify, g, request
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
import sqlite3
import secrets

DATABASE = 'recipe.db'
SECRET_KEY = secrets.token_hex(16)

app = Flask(__name__)
CORS(app)

app.config['JWT_SECRET_KEY'] = SECRET_KEY
jwt = JWTManager(app)

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def query_db(query, args=(), one=False):
    cur = get_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    get_db().commit()
    return (rv[0] if rv else None) if one else rv

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    recipes = query_db("SELECT id, title, description, image FROM recipes")
    recipes_list = [{'id': row[0], 'title': row[1], 'description': row[2], 'image': row[3]} for row in recipes]
    return jsonify({'recipes': recipes_list})

@app.route('/api/recipes', methods=['POST'])
def add_recipe():
    data = request.json
    query_db("INSERT INTO recipes (title, description, image) VALUES (?, ?, ?)", 
             (data.get('title'), data.get('description'), data.get('image')))
    return jsonify({'status': 'success', 'message': 'Recipe added successfully!'}), 201

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    hashed_password = generate_password_hash(data.get('password'), method='pbkdf2:sha256')
    try:
        query_db("INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, ?)", 
                 (data.get('username'), data.get('email'), hashed_password, data.get('is_admin', False)))
        return jsonify({'status': 'success', 'message': 'User registered successfully!'}), 201
    except sqlite3.IntegrityError:
        return jsonify({'status': 'error', 'message': 'Username or email already exists!'}), 400


@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        user = query_db("SELECT id, password, is_admin FROM users WHERE username=?", (data.get('username'),), one=True)

        if user and check_password_hash(user[1], data.get('password')):
            access_token = create_access_token(identity=user[0])
            return jsonify({'status': 'success', 'access_token': access_token, 'is_admin': user[2]}), 200

        return jsonify({'status': 'error', 'message': 'Invalid credentials!'}), 401

    except Exception as e:
        # This is a generic error handler. In a real-world scenario, you'd probably want more specific handlers.
        return jsonify({'status': 'error', 'message': 'Something went wrong!'}), 500

@app.route('/api/protected', methods=['GET'])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

if __name__ == '__main__':
    app.run(debug=True)
