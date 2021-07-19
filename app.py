from flask import Flask, render_template, url_for
import time

app = Flask(__name__)

@app.route('/')
def home():
    return(render_template('index.html'))

@app.route('/api')
def react():
    return time.asctime()


if __name__ == "__main__":
    app.run()
