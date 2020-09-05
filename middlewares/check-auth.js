const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // console.log(token)
    const decoded = jwt.verify(token, process.env.PRIVATE_KEY || "Secrect");
    // console.log(decoded);
    req.userData = decoded;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      success: false,
      message: "Auth failed",
    });
  }
};
