const CategoryService = require("../services/productCategory.service");

exports.createProductCategory = async (req, res) => {
  try {
    const productCategory = await CategoryService.createCategory(
      req.body
    );
    res.status(201).json(productCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllProductCategories=async(req,res)=>{
    try {
        const data =await CategoryService.getAllCategories()
        res.status(200).json({success:true,count:data.length,data})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

exports.getCategoryById=async()=>{
    try{
        const category=await CategoryService.getCategoryById(req.params.id);
        if(!category){
            return res.status(404).json({success:false, message:"Category not found"});
        }
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.updateCategory=async(req,res)=>{
    try{
        const category=await CategoryService.updateCategory(req.params.id, req.body);
        if(!category){
            return res.status(404).json({success:false, message:"Category not found"});
        }
        res.status(200).json({success:true, category});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

exports.deleteCategory=async(req, res)=>{
    try{
        const category=await CategoryService.deleteCategory(req.params.id);
        if(!category){
            return res.status(404).json({success:false, message:"Category not found"});
        }
        res.status(200).json({success:true, message:"Category deleted successfully"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
};


