const mongoose = require("mongoose");
require("dotenv").config();


const authenticationModel = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
        },
    otp: {
      type: String,
      // required: true,
    }
  },
  {
    timestamps: true,
  }
);

const AuthenticateUser = mongoose.model(
  "AuthenticateUser",
  authenticationModel
);
module.exports = AuthenticateUser;
