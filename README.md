# 💱 Currency Exchange App

A full-stack web application that allows users to convert currencies using real-time exchange rates.

This project includes both frontend and backend components:
- **Frontend:** HTML, CSS, and JavaScript (inside `public/` folder)
- **Backend:** Node.js + Express server that securely handles API requests without exposing the API key

---

## 🌐 Features

- Real-time currency conversion
- Backend hides the API key using `.env` file
- Clean and user-friendly interface
- Responsive and simple design

---

## 🛠️ Tech Stack

| Layer     | Technology               |
|-----------|--------------------------|
| Frontend  | HTML, CSS, JavaScript    |
| Backend   | Node.js, Express         |
| API       | [ExchangeRate-API](https://www.exchangerate-api.com/) |

---

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/currency-exchange.git
   cd currency-exchange
2. Install dependencies:
   npm install
3. Create a .env file in the root directory and add your API key:
   API_KEY=your_exchange_rate_api_key_here
4. Start the backend server:
   node server.js
5. Open your browser and navigate to:
   http://localhost:5000

🔐 About the Backend
This project uses Node.js to run a simple Express server. The server acts as a proxy between the frontend and the external API, ensuring that the API key remains hidden from users.

Example of how the server works:

app.get('/api/rates', async (req, res) => {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
});

The API key is stored securely in a .env file.

The frontend makes requests to /api/rates instead of directly to the API.

📦 Folder Structure

currency-exchange/
├── public/             # Frontend files
├── server.js           # Backend server
├── .env                # (not uploaded) contains API key
├── package.json
├── package-lock.json
└── README.md

⚠️ Notes
Do NOT upload .env or node_modules folders to GitHub.

Make sure your .gitignore file includes:
.env
node_modules/

---

## 🙏 Credits

- **Frontend UI Design:** Created by my talented sister ✨
- Connect with her on [LinkedIn](https://eg.linkedin.com/in/shefaa-mohd-90a6172a7) 💛
  Huge thanks to her for crafting the interface with a clean and elegant touch.

---

## 📬 Contact

Built with 💻 by Arwa AlAidaroos 
If you find this project useful, feel free to ⭐ the repo or connect with me!
