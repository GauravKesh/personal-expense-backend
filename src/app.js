const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const budgetRoutes = require('./api/routes/Budget.route');
const categoryRoutes = require('./api/routes/Category.route');
const transactionRoutes = require('./api/routes/Transaction.route');

// API routes
app.use('/api/budgets', budgetRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ message: 'Backend server is running', status: 'OK' });
});

module.exports = app;
