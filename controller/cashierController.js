const Cashier = require("../models/Cashier");
const Inventory = require("../models/Inventory");
const mongoose = require("mongoose");

exports.checkout = (req, res) => {
  let userId = req.user.id;

  const cart = req.body.cart;

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        for (var cartItem in cart) {
          for (var product in inventory.stocks) {
            if (inventory.stocks[product]._id == cart[cartItem].id) {
              inventory.stocks[product].quantity -= cart[cartItem].quantity;
              break;
            }
          }
        }
        inventory.save();
      }
    });

  Cashier.findOne({ user: userId })
    .populate("items")
    .exec((err, cashier) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find cashier", err });
      } else {
        console.log(cashier.items);
        console.log(cart);
        cashier.items.push(req.body.cart);
        console.log(cashier.items);
        cashier.save().then((cashier) => {
          res.status(200).json({ message: "Added to inventory" });
        });
      }
    });
};

exports.getAllSales = (req, res) => {
  let userId = req.user.id;

  Cashier.findOne({ user: userId })
    .populate("items")
    .exec((err, cashier) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find total sales", err });
      } else if (!cashier) {
        res.status(400).json({ message: "No items sold" });
      } else {
        res
          .status(200)
          .json({ message: "sold items", soldItems: cashier.items });
      }
    });
};
