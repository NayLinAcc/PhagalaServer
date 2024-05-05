const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const colors = require('colors');
const morgan = require('morgan');

const app = express();

// Middleware to log requests
app.use(morgan('dev'));

// Middleware to parse JSON bodies
app.use(express.json());

// Load environment variables from .env file
dotenv.config({
  path: './config/config.env'
});

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api/todo/auth', require('./routes/user'));

// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT,
  console.log(`Server running mode on port ${PORT}`.red.underline.bold)

);