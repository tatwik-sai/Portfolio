import os
from dotenv import load_dotenv
from flask import Flask, request
from flask_cors import CORS
from twilio.rest import Client

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[os.getenv("ORIGIN")])

client = Client(os.getenv("ACCOUNT_SID"), os.getenv("AUTH_TOKEN"))

@app.route("/send-message", methods=["POST"])
def send_message():
    data = request.get_json()
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")
    if not name or not email or not message:
        return {"error": "All fields are required"}, 400

    full_msg = f"New Message from Portfolio:\nName: {name}\nEmail: {email}\nMessage: {message}"

    client.messages.create(
        from_=os.getenv("FROM_WHATSAPP_NUMBER"),
        to=os.getenv("TO_WHATSAPP_NUMBER"),
        body=full_msg
    )

    return {"status": "sent to WhatsApp"}

if __name__ == "__main__":
    app.run(debug=True)