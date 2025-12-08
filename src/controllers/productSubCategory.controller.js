const SubCategoryService = require("../services/productSubCategory.service");
const mongoose = require("mongoose");
exports.createProductSubCategory = async (req, res) => {
  try {
    const productSubCategory = await SubCategoryService.createSubCategory(
      req.body
    );
    res.status(201).json(productSubCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProductSubCategory = async (req, res) => {
  try {
    const { category } = req.query;

    console.log({ category });

    let data;
    if (category) {
      const categoryObj = mongoose.Types.ObjectId(category);
      data = await SubCategoryService.getAllSubCategories({
        productCategory: categoryObj,
      });
    } else {
      data = await SubCategoryService.getAllSubCategories();
    }

    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubCategoryById = async () => {
  try {
    const subCategory = await SubCategoryService.getSubCategoryById(
      req.params.id
    );
    if (!subCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Sub Category not found" });
    }
    res.status(200).json({ success: true, subCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProductSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategoryService.updateSubCategory(
      req.params.id,
      req.body
    );
    if (!subCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Product Sub Category Not Found" });
    }
    res.status(200).json({ success: true, subCategory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProductSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategoryService.deleteSubCategory(
      req.params.id
    );

    if (!subCategory) {
      return res
        .status(404)
        .json({ success: false, message: "Product Sub Category Not Found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Sub Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
