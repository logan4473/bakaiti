const jwt = require("jsonwebtoken");
const User = require("../models/users");

module.exports.apiAuth = async (req, res, next) => {
  let user = { isAuthenticated: false };
  if (req.headers["authorization"] !== null) {
    try {
      let jwtData = jwt.verify(
        req.headers.authorization.replace("Bearer ", ""),
        process.env.SECRET
      );
      let userData = await User.findOne({
        username: jwtData.username,
        hash: jwtData.hash,
      }).catch((err) => console.error(err));
      user.isAuthenticated = userData ? true : false;
      user.data = userData;
    } catch (err) {
      user.isAuthenticated = false;
      user.data = null;
    }
  }
  req.user = user;
  next();
};
