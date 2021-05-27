const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors")

const users = require("./routes/api/users");
const inventory = require("./routes/api/inventory");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors())

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/inventory", inventory);
app.use("*", (req, res) => res.status(404).json({error: "not found"}));

module.exports = app