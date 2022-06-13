const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(400).json({ status: false, msg: "Invalid Token !!" });
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
};

module.exports = auth;
