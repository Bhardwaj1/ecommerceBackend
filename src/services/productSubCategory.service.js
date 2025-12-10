const ProductSubCategoryModel = require("../models/productSubCategory.models");

exports.createSubCategory = async (data) => {
  const created = await ProductSubCategoryModel.create(data);

  return ProductSubCategoryModel.findById(created._id).populate(
    "productCategory"
  );
};

exports.getAllSubCategories = (filter = {}) => {
  return ProductSubCategoryModel.find(filter).populate("productCategory");
};

exports.getSubCategoryById = (id) => {
  return ProductSubCategoryModel.findById(id).populate("productCategory");
};

exports.updateSubCategory = (id, data) => {
  return ProductSubCategoryModel.findByIdAndUpdate(id, data, {
    new: true,
  }).populate("productCategory");
};

exports.deleteSubCategory = (id) => {
  return ProductSubCategoryModel.findByIdAndDelete(id);
};
