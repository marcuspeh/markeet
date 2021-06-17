const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
const cashier_controller = require("../../controller/cashierController");

// @route   GET api/cashier/getSales
// @desc    Get user total sales
// @access  private
router.get("/getSales", auth, cashier_controller.getAllSales);

// @route   POST api/cashier/checkout
// @desc    Checksout items in cart
// @access  private
router.post("/checkout", auth, cashier_controller.checkout);

module.exports = router;
