const express = require("express");
const {
  sendOtp,
  verifyOtp,
  createUser,
} = require("../controller/userCntrller");

const router = express.Router();

router.post("/sendotp", sendOtp);
router.post("/verifyotp", verifyOtp);

router.post("/createuser", createUser);


module.exports = router;
