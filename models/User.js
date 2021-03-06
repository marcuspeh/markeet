const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    googleId: {
        type: String
    },
    password: {
        type: String
    },   
    address: {
        type: String,
    },
    number: {
        type: String,
    },
    tax: {
        type: Number,
        default: 7
    },
    notification: [],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);