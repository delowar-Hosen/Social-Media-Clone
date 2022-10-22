const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const user = require("./routes/user.js");
const { readdirSync } = require("fs");
const app = express();

// mongodb connect
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database Connected");
});

// middlware
app.use(cors());
app.use(express.json());

// routers
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// port
const port = process.env.PORT || 8000;
app.listen(port, function (req, res) {
  console.log(`server is running on port ${port}`);
});
