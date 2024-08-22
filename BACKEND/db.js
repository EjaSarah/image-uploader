const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

// this is the connection string from my .env
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
const db = mongoose.connection;

module.exports = db;