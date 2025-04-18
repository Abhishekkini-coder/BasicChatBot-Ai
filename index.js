const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // Replace with your actual MySQL password
  database: "db1", // Replace with your actual database name
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// **Default Route (Home Page)**
app.get("/", (req, res) => {
  res.send("Welcome to My Chatbot API! 🚀");
});

// **Chat Route (GET)**
app.get("/chat", (req, res) => {
  res.send("Chatbot is working! 🚀");
});

// **Chat Route (POST)**
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "Message is required" });
  }

  // **For now, just echo the user's message**
  res.json({ reply: `You said: ${userMessage}` });

  // Later, you can fetch responses from a MySQL database
});

// Start Server
app.listen(port, () => {
  console.log(`Chatbot server is running on port ${port}`);
});
