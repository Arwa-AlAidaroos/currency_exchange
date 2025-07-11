require('dotenv').config();
const apiKey = process.env.API_KEY;
console.log("API Key:", process.env.API_KEY);

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const axios = require('axios');
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public'))); // <-- مهم جدًا



app.get('/exchange/:fromCurr', async (req, res) => {
  const fromCurr = req.params.fromCurr.toUpperCase();
 // const toCurr = req.params.toCurr.toUpperCase();

  try {
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurr}`);
    const data = response.data;

    if (data.result === 'success') {
      res.json(data.conversion_rates);
    } else {
      res.status(400).json({ error: 'Invalid currency' });
    }
  } catch (error) {
    res.status(500).json({ 
      error: "Error fetching data from external API", 
      details: error.response ? error.response.data : error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
