const { Error } = require("mongoose");
const Inventory = require("./../models/Inventory");

// handle GET at api/inventory/getInventory
exports.getInventory = (req, res) => {
  let userId = req.user.id;

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else if (!inventory) {
        res.status(400).json({ message: "No inventory" });
      } else {
        res
          .status(200)
          .json({ message: "inventory", product: inventory.stocks });
      }
    });
};

// handle GET at api/inventory/getProduct
exports.getProduct = (req, res) => {
  let userId = req.user.id;

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        for (var product in inventory.stocks)
          if (inventory.stocks[product]._id == req.body.id) {
            res
              .status(200)
              .json({ message: "Success", product: inventory.stocks[product] });
            return;
          }
        res
          .status(400)
          .json({
            message: "Couldn't find product",
            data: "Couldn't find product",
          });
      }
    });
};

// handle POST at api/inventory/addInventory
exports.addInventory = (req, res) => {
  let userId = req.user.id;

  const barcode = req.body.barcode;
  const title = req.body.title;
  const category = req.body.category;
  const cost = req.body.cost;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const picture = req.body.picture;

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        var errors = {}
        var skip = false;

        if (!barcode) {
          errors.barcode = "Barcode is required";
          skip = true;
        } 

        if (!title) {
          errors.title = "Title is required";
          skip = true;
        } 

        if (!category) {
          errors.category = 'Category is required';
          skip = true;
        } 

        if (!cost) {
          errors.cost = 'Cost is required';
          skip = true;
        } else if (cost < 0) {
          errors.cost = 'Cost cannot be less than 0';
          skip = true;
        } 

        if (!price) {
          errors.price = 'Price is required';     
          skip = true;
        } else if (price < 0) {
          errors.price = 'Price cannot be less than 0';
          skip = true;
        } 

        if (!quantity) {
          errors.quantity = 'Quantity is required';
          skip = true;
        } else if (quantity < 0) {
          errors.quantity = 'Quantity cannot be less than 0';
          skip = true;
        } 

        if (skip) return res.status(400).json({ message: "Input error", errors});
        const product = {
          barcode: barcode,
          title: title,
          category: category,
          cost: cost,
          price: price,
          quantity: quantity,
          picture: picture || "https://github.com/marcuspeh/Markeet/blob/main/submissions/unknown.png?raw=true"
        };
        inventory.stocks.push(product);
        inventory.save().then((inventory) => {
          res
            .status(200)
            .json({ message: "Added to inventory", product: inventory.stocks });
        });
      }
    });
};

// handle POST at api/inventory/editProduct
exports.editProduct = (req, res) => {
  let userId = req.user.id;

  const id = req.body.id;
  const barcode = req.body.barcode;
  const title = req.body.title;
  const category = req.body.category;
  const cost = req.body.cost;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const picture = req.body.picture;

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        var errors = {}
        var skip = false;

        if (!barcode) {
          errors.barcode = "Barcode is required";
          skip = true;
        } 

        if (!title) {
          errors.title = "Title is required";
          skip = true;
        } 

        if (!category) {
          errors.category = 'Category is required';
          skip = true;
        } 

        if (!cost) {
          errors.cost = 'Cost is required';
          skip = true;
        } else if (cost < 0) {
          errors.cost = 'Cost cannot be less than 0';
          skip = true;
        } 

        if (!price) {
          errors.price = 'Price is required';     
          skip = true;
        } else if (price < 0) {
          errors.price = 'Price cannot be less than 0';
          skip = true;
        } 

        if (!quantity) {
          errors.quantity = 'Quantity is required';
          skip = true;
        } else if (quantity < 0) {
          errors.quantity = 'Quantity cannot be less than 0';
          skip = true;
        } 

        if (skip) return res.status(400).json({ message: "Input error", errors});
        
        for (var product in inventory.stocks) {
          if (inventory.stocks[product]._id == id) {
            if (barcode !== inventory.stocks[product].barcode)
              inventory.stocks[product].barcode = barcode;
            if (title !== inventory.stocks[product].title)
              inventory.stocks[product].title = title;
            if (category !== inventory.stocks[product].category)
              inventory.stocks[product].category = category;
            if (cost !== inventory.stocks[product].cost)
              inventory.stocks[product].cost = cost;
            if (price !== inventory.stocks[product].price)
              inventory.stocks[product].price = price;
            if (quantity !== inventory.stocks[product].quantity)
              inventory.stocks[product].quantity = quantity;
            if (picture !== inventory.stocks[product].picture)
              inventory.stocks[product].picture = picture;
          }
        }

        inventory.save().then((inventory) => {
          res
            .status(200)
            .json({ message: "Edited product", product: inventory.stocks });
        });
      }
    });
};

// handle POST at api/inventory/deleteProduct
exports.deleteProduct = (req, res) => {
  let userId = req.user.id;

  Inventory.findOneAndUpdate(
    { user: userId },
    { $pull: { stocks: { _id: req.body.id } } },
    { new: true, useFindAndModify: false },
    (err) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        Inventory.findOne({ user: userId })
          .populate("stocks")
          .exec((err, inventory) => {
            if (err) {
              res
                .status(400)
                .json({ message: "Couldn't find inventory List", err });
            } else {
              res
                .status(200)
                .json({
                  message: "Deleted Successfully",
                  product: inventory.stocks,
                });
            }
          });
      }
    }
  );
};
