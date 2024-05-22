const mongoose = require("mongoose");
require("dotenv").config();

const userModel = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
    },
    age: {
      type: Number,
      minValue:0
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userModel);
module.exports = User;
