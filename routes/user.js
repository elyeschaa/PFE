const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.get("/profile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await User.findById(id);

    res
      .status(200)
      .json({ status: true, message: "profile details", data: profile });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
});

router.put("/editProfile/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(req.body.password, salt);

    console.log(hashed_password);

    await User.findByIdAndUpdate(id, {
      ...req.body,
      password: hashed_password,
    });

    let profile = await User.findById(id);

    res
      .status(200)
      .json({ status: true, message: "profile edited", data: profile });
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
});

module.exports = router;
