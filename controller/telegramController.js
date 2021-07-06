const Inventory = require("./../models/Inventory");
const User = require("./../models/User");

// handle GET at api/telegram/checkstock
exports.checkStock = (req, res) => {
    const shopName = req.body.shopName;
    const productName = req.body.productName;

    User.findOne({name: shopName})
        .exec((err, user) => {
            if (err) 
                res.status(400).json({message: "Couldn't find shop"})
            else {
                Inventory.findOne({ user: user })
                    .populate("stocks")
                    .exec((err, inventory) => {
                    if (err) {
                        res.status(400).json({ message: "Couldn't find shop", err });
                    } else if (!inventory) {
                        res.status(400).json({ message: "Couldn't find shop" });
                    } else {
                        for (var index in inventory.stocks) {
                            if (inventory.stocks[index].title === productName) {
                                if (inventory.stocks[index].quantity > 0) {
                                    return res.status(200).json({message: `Found product and in stock. Quantity: ${inventory.stocks[index].quantity}`});
                                } else {
                                    return res.status(200).json({message: "Found product but out of stock."});
                                }
                                
                            } 
                        }
                        return res.status(400).json({message:"Product not found"});
                    }
                });
            }
        })    
};
// handle GET at api/telegram/listInventory
exports.listInventory = (req, res) => {
    const shopName = req.body.shopName;
    const productName = req.body.productName;

    User.findOne({name: shopName})
        .exec((err, user) => {
            if (err) 
                res.status(400).json({message: "Couldn't find shop"})
            else {
                Inventory.findOne({ user: user })
                    .populate("stocks")
                    .exec((err, inventory) => {
                    if (err) {
                        res.status(400).json({ message: "Couldn't find shop"});
                    } else if (!inventory) {
                        res.status(400).json({ message: "Couldn't find shop"});
                    } else {
                        return res.status(200).json({message:"Product not found", inventory: inventory.stocks});
                    }
                });
            }
        })    
};