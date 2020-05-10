const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productModel = require("./models/product");

require("dotenv").config();

mongoose.set("useUnifiedTopology", true);
mongoose.set("useNewUrlParser", true);

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(() => {
    console.error("MongoDB connection error!");
  });


//------------- FOR DEV PURPOSES----
//require('./seed');
//----------------------------------


app.set("view engine", "pug");
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(process.env.PORT, () => {
  console.log("listening");
});
