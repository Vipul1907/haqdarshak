const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_KEY = process.env.JWT_SECRET_KEY;
const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
        console.log(decoded);
      }
    } catch (error) {
      throw new Error("Not Authorized token expired , please login again ");
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});


authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please authenticate" });
  }
};

authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }
  next();
};

module.exports = { authMiddleware, isAdmin, authenticateUser, authorizeAdmin };
