const ProductModel = require("../models/product.model");

exports.createProductService = async (data) => {
  const createdproduct = await ProductModel.create(data);
  return await ProductModel.findById(createdproduct._id)
    .populate("productCategory")
    .populate("productSubCategory");
};

exports.getAllProductService = () => {
  return ProductModel.find()
    .populate("productCategory")
    .populate("productSubCategory");
};

exports.getProductByIdService = (id) => {
  return ProductModel.findById(id)
    .populate("productCategory")
    .populate("productSubCategory");
};

exports.updateProductService = (id, data) => {
  return ProductModel.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteProductService = (id) => {
  return ProductModel.findByIdAndDelete(id);
};
