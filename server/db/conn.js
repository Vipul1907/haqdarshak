const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/haqdarshak";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => {
    console.error("Connection Error", err.message);
  });

module.exports = mongoose;