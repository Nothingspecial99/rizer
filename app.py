from flask import Flask, request, jsonify, render_template


import google.generativeai as genai

app = Flask(__name__)

apiKey = ""


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/summarize", methods=["POST"])
def run_python():
    article = request.data.decode("utf-8")
    numOfWords = 150
    prompt = (
        f"Summarize this article in {numOfWords} words. I am using the result of this prompt for an webapp. So make sure that it doesn't contain any formatting. It should be plain text. Here is the article: "
        + article
    )

    genai.configure(api_key=apiKey)
    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 64,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }

    model = genai.GenerativeModel(
        model_name="gemini-1.5-flash",
        generation_config=generation_config,
    )

    chat_session = model.start_chat(history=[])

    response = chat_session.send_message(prompt)

    result = response.text
    return jsonify(result=result)


if __name__ == "__main__":
    app.run()
