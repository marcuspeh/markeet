const jwt = require("jsonwebtoken");
const keys = require("./../config/keys");

const jwtSecret = keys.secretOrKey;

const auth = (req, res, next) => {
    const token = req.header("Authorization");
  
    // check for token
    if (!token)
      return res.status(403).json({ message: "Authorization denied, please login" });
  
    try {
      //verify token
      const decoded = jwt.verify(token, jwtSecret);
  
      // add user from token payload which contains the user id we attached to the token
      req.user = decoded;
  
      return next();
    } catch (e) {
      res.status(400).json({ message: "Please log in" });
    }
};

module.exports = { auth };