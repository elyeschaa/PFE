const router = require("express").Router();

router.use("/user", require("./auth"));
router.use("/books", require("./books"));
router.use("/checkout", require("./checkout"));
router.use("/order", require("./order"));
router.use("/admin", require("./admin"));
router.use("/user", require("./user"));

module.exports = router;
