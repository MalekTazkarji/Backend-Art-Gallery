const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hero = require("../src/routes/hero");
const users = require('../src/routes/Users');
const bodyParser = require('body-parser');
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://art-gallery:art123@cluster0.h7jsr.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Database not connected!", err);
    process.exit();
  });

app.use("/", hero);
app.use("/", users);

app.listen(port, () => console.log(`listening on port ${port}`));
