from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

products = [
    {
        "title": "Sample Product 1",
        "price": "$29.99",
        "image": "https://m.media-amazon.com/images/I/61dW4ZIvD9L._AC_SL1500_.jpg",
        "category": "Tech",
        "affiliate_url": "https://amzn.to/45wPZCZ"
    },
    {
        "title": "Sample Product 2",
        "price": "$49.99",
        "image": "https://m.media-amazon.com/images/I/71K+RKq7slL._AC_SL1500_.jpg",
        "category": "Fitness",
        "affiliate_url": "https://amzn.to/4k6Mkzt"
    },
    {
        "title": "Sample Product 3",
        "price": "$19.99",
        "image": "https://m.media-amazon.com/images/I/71eUwDk8z+L._AC_SL1500_.jpg",
        "category": "Tech",
        "affiliate_url": "https://amzn.to/4jWadtb"
    }
]

@app.route("/")
def home():
    return "Snagify API is live."

@app.route("/products", methods=["GET"])
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)
