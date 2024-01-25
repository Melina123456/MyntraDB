const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobileNo: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  alternateMoNumber: {
    type: String,
  },
  hint: {
    type: String,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
