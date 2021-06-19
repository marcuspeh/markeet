const express = require("express");
const router = express.Router();
const users_controller = require("../../controller/usersController");
const { auth } = require("../../middlewares/auth");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", users_controller.register);

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", users_controller.login);

// @route POST api/users/googleLogin
// @desc Login user and return JWT token
// @access Public
router.post("/googlelogin", users_controller.googleLogin);

// @route POST api/users/googleRegister
// @desc Register user
// @access Public
router.post("/googleregister", users_controller.googleRegister);

// @route POST api/users/updateName
// @desc update user
// @access Private
router.post("/updatename", auth, users_controller.updateName);

// @route POST api/users/updateEmail
// @desc Edit user
// @access Private
router.post("/updateemail", auth, users_controller.updateEmail);

// @route POST api/users/updatePassword
// @desc Edit user
// @access Private
router.post("/updatepassword", auth, users_controller.updatePassword);

// @route POST api/users/updateAddress
// @desc Edit address
// @access Private
router.post("/updateaddress", auth, users_controller.updateAddress);

// @route POST api/users/updatenumber
// @desc Edit number
// @access Private
router.post("/updatenumber", auth, users_controller.updateNumber);

// @route GET api/users/editUser
// @desc Edit user
// @access Private
router.get("/getuser", auth, users_controller.getUser);

module.exports = router;