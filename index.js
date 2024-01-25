require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const loginRoutes = require("./routes/login.routes");
const userDetailsRoutes = require("./routes/user_details.routes");
const productDetailsRoutes = require("./routes/product_details.routes");
const categoryDetailsRoutes = require("./routes/category_details.routes");

app.use("/uploads", express.static("./uploads"));
app.use("/login", loginRoutes);
app.use("/userdetails", userDetailsRoutes);
app.use("/productdetails", productDetailsRoutes);
app.use("/categorydetails", categoryDetailsRoutes);

app.route("/").get((req, res) => {
  res.json("welcome on myntra clone of backend.");
});

mongoose
  .connect(process.env.monogo_connect, {})
  .then(() => {
    console.log("MongoDB connected succesfully");
  })
  .catch((err) => {
    console.log("MongoDB connection failed.", err);
  });

app.listen(process.env.PORT || 8000, () => {
  console.log("server started successfully.");
});
