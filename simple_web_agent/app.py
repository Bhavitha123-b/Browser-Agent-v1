from flask import Flask, render_template, request
from browser_agent import browse_and_extract

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = ""
    query = ""
    confidence = None

    if request.method == "POST":
        query = request.form["query"]
        result = browse_and_extract(query)
        

    return render_template(
        "index.html",
        result=result,
        query=query,
        confidence=confidence
    )

if __name__ == "__main__":
    app.run(debug=True)
