const express = require('express');
const cors = require('cors');
const geminiRoute = require('./gemini'); // ✅ Import the route

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', geminiRoute); // ✅ Mount the router under '/api'

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
