const express = require("express");
const router = express.Router();
const CategoryDetails = require("../model/category.model");

router.route("/add").post((req, res) => {
  const categoryDetails = new CategoryDetails({ ...req.body });
  categoryDetails
    .save()
    .then(() => {
      res.json("category added successfully.");
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.route("/").get(async (req, res) => {
  try {
    const result = await CategoryDetails.find({});
    return res.json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
