const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LeafCategoryDetails = Schema({
  name: {
    type: String,
    required: true,
  },
});

const SubCategoryDetails = Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isExpandable: {
    type: Boolean,
    required: true,
  },
  leafCategory: [LeafCategoryDetails],
});

const CategoryDetails = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  subCategory: [SubCategoryDetails],
});

module.exports = mongoose.model("CategoryDetails", CategoryDetails);
