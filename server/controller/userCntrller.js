const User = require("../model/userModel");
const AuthenticateUser = require("../model/authenticationModel");
const asyncHandler = require("express-async-handler");

const sendOtp = asyncHandler(async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  try {
    if (phoneNumber) {
      const newAuthRequest = await AuthenticateUser.create(req.body);
      // request firebase for otp

      // save otp against number provided

      res.json({ msg: "OTP send Successfully" });
    } else {
      res.json({
        msg: "Invalid input data",
        success: false,
      });
      throw new Error("Invalid input data");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


const verifyOtp = asyncHandler(async (req, res) => {
  const otp = req.body.otp;
  const phoneNumber = req.body.phoneNumber;
  try {
    if (otp && phoneNumber) {
      const authDetails = await AuthenticateUser.findOne({
        phoneNumber: phoneNumber,
      });
      if (otp === authDetails.otp) {
        res.json({ msg: "OTP verified" });
      } else {
        res.json({ msg: "OTP does not match" });
      }
    } else {
      res.json({
        msg: "Invalid input data",
        success: false,
      });
      throw new Error("Invalid input data");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const createUser = asyncHandler(async (req, res) => {
  const fullName = req.body.fullName;
  const dob = req.body.dob;
  const age = req.body.age;

  try {
    if (fullName &&(dob || age) ) {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } else {
      res.json({
        msg: "Invalid input data",
        success: false,
      });
      throw new Error("Invalid input data");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  sendOtp,
  verifyOtp,
  createUser
};
