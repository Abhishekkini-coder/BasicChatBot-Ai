const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

console.log("API Key:", process.env.GEMINI_API_KEY); // ✅ Debugging

router.post('/generate', async (req, res) => {
    try {
        const prompt = req.body.prompt;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


        const result = await model.generateContent(prompt);
        const response = result.response.text(); // ✅ Fixed response extraction

        res.json({ response });
    } catch (error) {
        console.error('Error:', error); // ✅ Full error logging
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
