const mongoose = require("mongoose");

const Book = new mongoose.Schema({
  bookImg: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  title: {
    type: String,
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

  description: {
    type: String,
  },

  isNewBook: {
    type: Boolean,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("book", Book);
