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