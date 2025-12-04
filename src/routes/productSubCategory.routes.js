const express=require("express");
const router=express.Router();

const {createProductSubCategory,getAllProductSubCategory,getSubCategoryById,updateProductSubCategory,deleteProductSubCategory}=require('../controllers/productSubCategory.controller');

router.post("/",createProductSubCategory);
router.get("/",getAllProductSubCategory);
router.get("/:id",getSubCategoryById);
router.put("/:id",updateProductSubCategory);
router.delete("/:id",deleteProductSubCategory);


module.exports=router;