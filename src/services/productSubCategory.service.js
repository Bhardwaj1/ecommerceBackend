const ProductSubCategoryModel = require("../models/productSubCategory.models");
const mongoose = require("mongoose");
exports.createSubCategory = async (data) => {
  const created = await ProductSubCategoryModel.create(data);

  return await ProductSubCategoryModel.findById(created._id).populate(
    "productCategory"
  );
};

exports.getSubCategoriesByCategory = (categoryId) => {
  return ProductSubCategoryModel.find({
    productCategory: mongoose.Types.ObjectId(categoryId),
  }).populate("productCategory");
};

exports.getSubCategoryById = (id) => {
  return ProductSubCategoryModel.findById(id);
};

exports.updateSubCategory = (id, data) => {
  return ProductSubCategoryModel.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteSubCategory = (id) => {
  return ProductSubCategoryModel.findByIdAndDelete(id);
};
