const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/cloth-app");
    console.log("Connected to Database.");
  } catch (err) {
    console.log("Database not Connected.");
  }
};

module.exports = db;
