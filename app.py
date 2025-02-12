from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/hello/")
@app.route("/hello/<name>")
def hello_there(name = None):
    return render_template(
        "hangman.html",
        name=name,
    )

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about/")
def about():
    return render_template("about.html")

@app.route("/contact/")
def contact():
    return render_template("contact.html")