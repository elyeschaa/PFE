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

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res
      .status(200)
      .json({ status: true, message: "user has been deleted", data: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, message: err });
  }
});

module.exports = router;
