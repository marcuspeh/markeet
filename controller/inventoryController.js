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
          res.status(200).json({ message: "inventory", product: inventory.stocks});
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
          if (inventory.stocks[product]._id == req.body.id){
            res.status(200).json({message: "Success", product: inventory.stocks[product]});
            return;
          } 
        res.status(400).json({message: "Couldn't find product", data: "Couldn't find product"});
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

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        const product = {
            barcode: barcode,
            title: title,
            category: category,
            cost: cost,
            price: price,
            quantity: quantity
            };
        inventory.stocks.push(product);
        inventory.save().then(inventory => {
          res.status(200).json({ message: "Added to inventory", product: inventory.stocks });
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

  Inventory.findOne({ user: userId })
    .populate("stocks")
    .exec((err, inventory) => {
      if (err) {
        res.status(400).json({ message: "Couldn't find inventory", err });
      } else {
        for (var product in inventory.stocks) {
          if (inventory.stocks[product]._id == id) {
            if (barcode) inventory.stocks[product].barcode = barcode;
            if (title) inventory.stocks[product].title = title;
            if (category) inventory.stocks[product].category = category;
            if (cost) inventory.stocks[product].cost = cost;
            if (price) inventory.stocks[product].price = price;
            if (quantity) inventory.stocks[product].quantity = quantity;
          }
        }

        inventory.save().then(inventory => {
          res.status(200).json({ message: "Edited product", product: inventory.stocks });
        });
      }
    });
};