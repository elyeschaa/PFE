const router = require("express").Router();
const Book = require("../models/Book");
const path = require("path");
const multer = require("multer");

// const upload = require("../middleware/upload.js");
const fileUploadPaths = {
  FILE_UPLOAD_PATH: path.join(__dirname, "..", "client/public/uploads"),
};

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, fileUploadPaths.FILE_UPLOAD_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.toLowerCase().replace(/ /g, "_"));
  },
});

const postFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let uploadPost = multer({
  storage: storage,
  fileFilter: postFilter,
});
router.post("/createBook", uploadPost.single("bookImg"), async (req, res) => {
  try {
    const { author, title, date, type, isNewBook, description, price, rating } =
      req.body;
    const book = await Book.create({
      bookImg: req.file.filename,
      author,
      title,
      date,
      type,
      isNewBook,
      price,
      description,
      rating,
    });
    res.status(200).json({
      status: true,
      message: "book created",
      data: book,
    });
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      status: true,
      message: "book list",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.get("/someBooks", async (req, res) => {
  try {
    const books = await Book.find({});
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (book) {
      res.status(200).json({
        status: true,
        message: "book informations",
        data: book,
      });
    } else {
      res.status(200).json({
        status: false,
        message: "book does not exist",
      });
    }
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.put("/editBook/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Book.findByIdAndUpdate(id, {
      ...req.body,
    });

    let book = await Book.findById(id);

    res.status(200).json({ status: true, message: "book edited", data: book });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: err });
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (book) {
      await Book.findByIdAndDelete(id);
      res.status(200).json({
        status: true,
        message: "book has been deleted",
        data: book,
      });
    } else {
      res.status(200).json({
        status: true,
        message: "book does not exist",
      });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
});

module.exports = router;
