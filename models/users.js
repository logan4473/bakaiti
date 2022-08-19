const { Schema, model } = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  mobile: { type: Number },
  username: { type: String },
  socketId: { type: String },
  hash: { type: String },
  salt: { type: String },
  contacts: [
    {
      username: { type: String },
      socketId: { type: String },
    },
  ],
});

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2(password, this.salt, 10000, 512, "sh512")
    .toString("hex");
};

userSchema.methods.verifyPassword = function (password) {
  const hash = crypto
    .pbkdf2(password, this.salt, 10000, 512, "sh512")
    .toString("hex");
  return this.hash === hash;
};

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      username: this.username,
      hash: this.hash,
    },
    process.env.SECRET
  );
};

module.exports = model("users", userSchema);
