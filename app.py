from flask import Flask, render_template

app = Flask(__name__)

# Route for Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Route for Diagnosis Page
@app.route('/diagnosis')
def diagnosis():
    return render_template('diagnosis.html')

# Route for Shop Page
@app.route('/shop')
def shop():
    return render_template('shop.html')

# Route for Working Page
@app.route('/working')
def working():
    return render_template('working.html')

# Route for Login Page
@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
