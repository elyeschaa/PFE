const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@public route
//@desc register route
//@path /register

router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phonenumber,
    address,
    zipcode,
    password,
  } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(400).json({ status: true, msg: "User already exists!!" });
    } else {
      // hashing the password
      const salt = await bcrypt.genSalt(10);
      const hashed_password = await bcrypt.hash(password, salt);

      const user = await User.create({
        firstName,
        lastName,
        email,
        phonenumber,
        address,
        zipcode,
        password: hashed_password,
      });

      res
        .status(200)
        .json({ status: true, msg: "User created successfully", data: user });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (user) {
      
      // comparing the passwords
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        const token = await jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        return res.status(200).json({
          status: true,
          msg: "Logged in successfully",
          token: token,
          data: user,
        });
        
      } else {
        return res.status(400).json({ status: true, msg: "Wrong password" });
      }
    } else {
      return res
        .status(400)
        .json({ status: true, msg: "User not found, Please register !!!" });
    }
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

module.exports = router;
