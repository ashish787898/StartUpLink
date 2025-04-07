// models/Idea.js - Mongoose Schema
const mongoose = require("mongoose");
const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 3 },
  description: { type: String, required: true, trim: true, minlength: 10 },
  expectedAmount: { type: Number, required: true, min: 1 },
  industry: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, match: /.+@.+\..+/ },
  phone: { type: String, trim: true, match: /^\d{10}$/ },
  createdAt: { type: Date, default: Date.now }
});
const Idea = mongoose.model("Idea", ideaSchema);
module.exports = Idea;