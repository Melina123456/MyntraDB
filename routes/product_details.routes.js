const express = require("express");
const router = express.Router();
const multer = require("multer");
const csv = require("csvtojson");
const productDetails = require("../model/product_details.model");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

router.route("/uploadAll").post(upload.single("csvFile"), async (req, res) => {
  const jsonArray = await csv().fromFile(req.file.path);
  try {
    const result = await productDetails.insertMany(jsonArray);
    return res.json("Added successfully.");
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.route("/getAll").get(async (req, res) => {
  try {
    const result = await productDetails.find({});
    return res.json({
      data: result,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
