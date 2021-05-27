const express = require("express");
const router = express.Router();
const users_controller = require("../../controller/usersController");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", users_controller.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", users_controller.login);

module.exports = router;