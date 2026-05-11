const express = require('express');
const app = express();

// Middleware to parse JSON (so we can read request bodies)
app.use(express.json());

// Basic Route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;