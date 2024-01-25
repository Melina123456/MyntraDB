const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

router.route("/").post(async (req, res) => {
  try {
    const result = await User.findOne({
      mobileNo: req.body.mobileNo,
    });

    if (result !== null) {
      //login
      sendToken(req.body.mobileNo, "Login successful", res);
    } else {
      res.json({ msg: "register" });
    }
  } catch (error) {
    res.json({ token: null, msg: "Error" });
  }
});

router.route("/register").post(async (req, res) => {
  const user = new User({
    mobileNo: req.body.mobileNo,
    password: req.body.password,
    fullname: req.body.fullname,
    email: req.body.email,
    gender: req.body.gender,
    alternateMoNumber: req.body.alternateMoNumber,
    hint: req.body.hint,
  });
  await user
    .save()
    .then(() => {
      sendToken(req.body.mobileNo, "Register successful", res);
    })
    .catch((err) => {
      res.status(500).json({ token: err, msg: "Error while saving data." });
    });
});

const sendToken = (mobileNo, msg, res) => {
  let token = jwt.sign({ mobileNo: mobileNo }, "this is myntra clone");
  res.json({ token: token, msg: msg });
};

module.exports = router;
