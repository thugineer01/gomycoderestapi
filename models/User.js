// models/User.js

const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
