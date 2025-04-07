// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /.+@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['idea_submitter', 'investor'],
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);
