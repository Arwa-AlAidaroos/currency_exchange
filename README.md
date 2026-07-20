# 💱 Currency Exchange App

A web application that allows users to convert currencies using real-time exchange rates.

This project includes a frontend interface and a Node.js + Express backend server that securely handles API requests without exposing the API key.

## 📸 Preview

<img src="./Screenshot.png" width="700">

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
- Displays exchange rate results

### Backend

- Built with Node.js and Express
- Receives requests from the frontend
- Communicates with ExchangeRate-API
- Keeps the API key hidden using `.env`
- Returns exchange rate data securely

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone (https://github.com/Arwa-AlAidaroos/currency_exchange)
cd currency-exchange
Install dependencies:
npm install
Create a .env file in the project root and add your API key:
API_KEY=your_exchange_rate_api_key_here
Start the backend server:
node server.js
Open your browser and visit:
http://localhost:5000
🔐 Backend Implementation

The backend works as a proxy between the frontend and ExchangeRate-API.

Instead of exposing the API key in the frontend, the server handles API requests securely:

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
├── screenshot.png
├── .env (not uploaded)
└── README.md
⚠️ Notes

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
