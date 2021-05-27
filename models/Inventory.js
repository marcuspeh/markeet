const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  stocks: [
    {
      barcode: {
        type: String, 
        require: true
      },
      title: {
        type: String,
        required: true
      },
      category:{
          type: String,
          required: true
      },
      cost: {
          type: Number,
          required: true
      },
      price: {
          type: Number,
          required: true
      },
      quantity: {
          type: Number, 
          required: true
      }
    }
  ]
});

module.exports = mongoose.model("Inventory", inventorySchema);