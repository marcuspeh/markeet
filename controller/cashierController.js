const Cashier = require("../models/Cashier");
const Inventory = require("../models/Inventory");
const mongoose = require("mongoose");

exports.checkout = (req, res) => {
  let userId = req.user.id;
  const cart = req.body;

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        for (var cartItem in cart) {
          for (var product in inventory.stocks) {
            if (inventory.stocks[product]._id == cart[cartItem]._id) {
              inventory.stocks[product].quantity -= cart[cartItem].cartQuantity;
              break;
            }
          }
        }
        inventory.save();
      }
    });
  
  User.findById(userId, (err, user) => {
    if (err) {
      res.status(400).json(err);
    } else {
      Cashier.findOne({ user: userId })
      .populate("items")
      .exec((err, cashier) => {
        if (err) {
          res.status(400).json({ message: "Couldn't find cashier", err });
        } else {
          var total = 0;
          var cost = 0;
          for (var index in cart) {
            cost += cart[index].cost * cart[index].cartQuantity;
            total += cart[index].price * cart[index].cartQuantity;
            cart[index].quantity = cart[index].cartQuantity;
          }
          var addToCart = {
            cartItems: cart,
            total: total / 100 * (100 + user.tax),
            cost: cost,
          };
          cashier.items.push(addToCart);
          cashier.save().then((cashier) => {
            res.status(200).json({ message: "Added to inventory" });
          });
        }
      });

    }
  })
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
