#coding:UTF-8

from flask import Flask,render_template
from tools.index import app as toolsBlueprint

app=Flask(__name__)
app.register_blueprint(toolsBlueprint,url_prefix="/tools")

@app.route("/")
def index():
    "主页面"
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=8000)
