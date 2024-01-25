const express = require("express");
const middleware = require("../middleware");
const User = require("../model/user.model");
const router = express.Router();

router.route("/").get(middleware.checkToken, async (req, res) => {
  try {
    const user = await User.findOne({ mobileNo: req.decoded.mobileNo });
    console.log(user);
    if (!user) {
      res.status(404).json({
        msg: "User not found",
      });
    } else {
      return res.status(200).json({
        message: "succcess",
        result: user,
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Internal server error ",
    });
  }
});

module.exports = router;
