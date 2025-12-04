const ProductSubCategoryModel = require("../models/productSubCategory.models");

exports.createSubCategory = async (data) => {
  const created = await ProductSubCategoryModel.create(data);

  return await ProductSubCategoryModel.findById(created._id).populate(
    "productCategory"
  );
};

exports.getAllSubCategories = () => {
  return ProductSubCategoryModel.find().populate("productCategory");
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
