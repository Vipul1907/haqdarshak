const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authoRouter = require("./routes/authoRoute");
const { errorHandler } = require("./middleware/errorHandler");
const bodyParser = require("body-parser");
const PORT = 5000;

const app = express();

require("./db/conn");
dotenv.config({ path: "./.env" });

app.use(bodyParser.json());

app.use(express.json());

app.use(cors());

app.use("/haqdarshak", authoRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
