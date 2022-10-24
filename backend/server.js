const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const app = express();

// middlware
require("dotenv").config();
app.use(cors());
app.use(express.json());

// mongodb connect
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database Connected");
});

// routers
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// port
const port = process.env.PORT || 8000;
app.listen(port, function (req, res) {
  console.log(`server is running on port ${port}`);
});
