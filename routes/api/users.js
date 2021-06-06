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

// @route POST api/users/googleLogin
// @desc Register user
// @access Public
router.post("/googlelogin", users_controller.googleLogin);

// @route POST api/users/googleRegister
// @desc Login user and return JWT token
// @access Public
router.post("/googleregister", users_controller.googleRegister);

module.exports = router;