const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
