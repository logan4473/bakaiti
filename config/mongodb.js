const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to DataBase 😎 ");
  })
  .catch((err) => {
    console.log("Connection Failed 🥲  Error : \n", err);
  });

module.exports = db;
