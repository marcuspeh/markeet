const express = require("express");
const router = express.Router();
const telegram_controller = require("../../controller/telegramController");


// @route   GET api/telegram/checkstock
// @desc    Check if stock is present in the store
// @access  public
router.get("/checkStock", telegram_controller.checkStock);

// @route   GET api/telegram/listInventory
// @desc    Check if stock is present in the store
// @access  public
router.get("/listInventory", telegram_controller.listInventory);

module.exports = router;