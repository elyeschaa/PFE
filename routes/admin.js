const router = require("express").Router();
const User = require("../models/User");

//@private route
//@desc userList route
//@path /userList

router.get("/userList", async (req, res) => {
  try {
    const userList = await User.find({});
    res.status(200).json({ status: true, msg: "user list", data: userList });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

module.exports = router;
