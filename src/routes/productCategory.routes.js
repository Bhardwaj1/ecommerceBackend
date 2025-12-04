const express = require("express");
const router = express.Router();

const {createProductCategory,getAllProductCategories,getCategoryById,updateCategory,deleteCategory} = require("../controllers/productCategory.controller");

router.post("/", createProductCategory);
router.get("/", getAllProductCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);


module.exports = router;
