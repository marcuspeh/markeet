const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
const inventory_controller = require("../../controller/inventoryController");


// @route   GET api/inventory/getInventory
// @desc    Get user inventory list
// @access  private
router.get("/getInventory", auth, inventory_controller.getInventory);

// @route   POST api/inventory/addProduct
// @desc    Get specific product
// @access  private
router.post("/getProduct", auth, inventory_controller.getProduct);

// @route   POST api/inventory/addInventory
// @desc    Add product to inventory list
// @access  private
router.post("/addInventory", auth, inventory_controller.addInventory);

// @route   POST api/inventory/editInventory
// @desc    Add product to inventory list
// @access  private
router.post("/editProduct", auth, inventory_controller.editProduct);

module.exports = router;