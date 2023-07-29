const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://social:5lFqEGVfkQVKFVql@cluster0.v3q7scl.mongodb.net/clothes_app");
    console.log("Connected to Database.");
  } catch (err) {
    console.log("Database not Connected.");
  }
};

module.exports = db;
