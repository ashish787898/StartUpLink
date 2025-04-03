// index.js - Backend
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Idea = require("./models/Idea");
const connection = require("./config/db");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.render("index");
});

// Fetch All Ideas
app.get("/api/ideas", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ error: "Error fetching ideas" });
  }
});

// Submit Idea
app.post("/submit", async (req, res) => {
  try {
    const { title, description, expectedAmount, industry, email, phone } = req.body;
    if (!title || !description || !expectedAmount || !industry || !email) {
      return res.status(400).json({ error: "All fields except phone are required!" });
    }

    const newIdea = new Idea({ title, description, expectedAmount, industry, email, phone });
    await newIdea.save();
    res.json({ message: "Idea submitted successfully!", idea: newIdea });
  } catch (error) {
    res.status(500).json({ error: "Error submitting idea" });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
