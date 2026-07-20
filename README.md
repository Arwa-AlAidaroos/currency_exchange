# 💱 Currency Exchange App

A web application that allows users to convert currencies using real-time exchange rates.

This project includes a frontend interface and a Node.js + Express backend server that securely handles API requests without exposing the API key.

## 🌐 Features

- Real-time currency conversion
- Supports multiple currencies
- Backend proxy to protect the API key
- Clean and user-friendly interface
- Responsive design for different screen sizes

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express |
| HTTP Client | Axios |
| API | ExchangeRate-API |

## 🏗️ Architecture

### Frontend
- Provides the user interface for currency conversion
- Sends requests to the backend server
- Displays exchange rate results to users

### Backend
- Built with Node.js and Express
- Receives requests from the frontend
- Communicates with ExchangeRate-API
- Keeps the API key hidden using environment variables (`.env`)
- Returns exchange rate data securely to the frontend

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/currency-exchange.git
cd currency-exchange

2. Install dependencies
npm install

3. Create a .env file
Create a .env file in the project root and add your API key:
API_KEY=your_exchange_rate_api_key_here

4. Start the backend server
node server.js

5. Open your browser
Visit:
http://localhost:5000

🔐 Backend Implementation

The backend works as a proxy between the frontend and ExchangeRate-API.
Instead of exposing the API key in the frontend, the server handles the API request securely:

app.get('/exchange/:fromCurr', async (req, res) => {
  const fromCurr = req.params.fromCurr.toUpperCase();
  const response = await axios.get(
    `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurr}`
  );
  res.json(response.data.conversion_rates);
});

The API key is stored securely in a .env file and is not exposed to users.

📦 Folder Structure

currency-exchange/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .env (not uploaded)
└── README.md

Notes
Do not upload:

.env
node_modules/

Make sure they are included in .gitignore.

🙏 Credits

UI Design Concept:
The interface concept was designed by my sister, and I implemented the design using HTML, CSS, and JavaScript.

Special thanks to her for creating the clean and elegant visual direction.

📬 Contact

Built by Arwa AlAidaroos

GitHub:
https://github.com/Arwa-AlAidaroos

If you find this project useful, feel free to ⭐ the repository or connect with me!
