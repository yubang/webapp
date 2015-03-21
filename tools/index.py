#coding:UTF-8

from flask import Blueprint,render_template

app=Blueprint("tools",__name__,template_folder="templates")

@app.route("/time")
def time():
    return render_template("tools_time.html")
