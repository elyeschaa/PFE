const mongoose = require("mongoose");

const Checkout = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Checkout", Checkout);
