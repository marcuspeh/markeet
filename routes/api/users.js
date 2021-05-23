const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const users_controller = require("../../controller/usersController");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", users_controller.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", users_controller.login);

module.exports = router;