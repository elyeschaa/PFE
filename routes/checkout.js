const router = require("express").Router();
const Checkout = require("../models/Checkout");
const Book = require("../models/Book");

//@private route
//@desc register route
//@path /register

router.post("/checkout", async (req, res) => {
  const { bookId, date, type } = req.body;

  try {
    const existingBook = await Book.findById(id);

    if (existingBook) {
      const book = await Checkout.create({
        userId,
        bookId,
        price: existingBook.price,
        date,
        type,
      });
      res.status(200).json({
        status: true,
        msg: "Checkout created successfully",
        data: book,
      });
    } else {
      res.status(400).json({ status: true, msg: "Book does not exists!!" });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

router.delete("/deleteCheckout", async (req, res) => {
  try {
    const { id } = req.params;

    const checkout = await Checkout.findById(id);

    if (checkout) {
      await Checkout.findByIdAndDelete(id);
      res
        .status(200)
        .json({ status: true, message: "checkout deleted", message: checkout });
    } else {
      res.status(200).json({ status: false, message: "book does not exists" });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

module.exports = router;
