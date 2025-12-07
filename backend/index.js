const express = require("express");
const app = express();
const PORT = 4000;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("AI Triage Backend is running!");
});

// Example API route for Snapshot 1
app.get("/api/status", (req, res) => {
    res.json({
        status: "OK",
        message: "Backend API is alive",
        timestamp: new Date()
    });
});

app.listen(PORT, () => {
    console.log(`AI Triage Backend running on port ${PORT}`);
});
