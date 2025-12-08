const ProductCategoryModel = require("../models/productCategory.model");

exports.createCategory=(data)=>{
    return ProductCategoryModel.create(data);
}

exports.getAllCategories = () => {
  return ProductCategoryModel.find().lean();
};

exports.getCategoryById = (id) => {
  return ProductCategoryModel.findById(id).lean();
};

exports.updateCategory = (id, data) => {
  return ProductCategoryModel.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteCategory = (id) => {
  return ProductCategoryModel.findByIdAndDelete(id);
};
