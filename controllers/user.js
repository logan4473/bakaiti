const User = require("../models/users");

module.exports.doc = async (req, res) => {
  res.send("This API is to handle user info.");
};
