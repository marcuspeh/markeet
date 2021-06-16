const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cashierSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    [
      {
        id: {
          type: String,
          required: true,
        },
        barcode: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        cost: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  ],
});

module.exports = mongoose.model("Cashier", cashierSchema);
