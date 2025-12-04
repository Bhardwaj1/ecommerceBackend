const express=require("express");
const upload=require("../middleware/upload.middleware");
const router= express.Router();
const {createProduct,getAllProduct,getAllProductById,updateProduct,deleteProduct}=require("../controllers/product.controller");
router.post("/",upload.array("images", 5), createProduct);
router.get("/", getAllProduct);
router.get("/:id", getAllProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports=router;