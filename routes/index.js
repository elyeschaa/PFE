const router = require("express").Router();

router.use("/user", require("./auth"));
router.use("/books", require("./books"));
router.use("/checkout", require("./checkout"));
router.use("/order", require("./order"));

module.exports = router;
