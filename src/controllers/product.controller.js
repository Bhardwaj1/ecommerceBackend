const ProductService = require("../services/product.service");
const cloudinary=require("../config/cloudinary");

exports.createProduct = async (req, res) => {
  try {
    let images = [];

    // Upload to Cloudinary
    if (req.files && req.files.length > 0) {
      for (let file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "products",
        });
        images.push(result.secure_url);
      }
    }

    // Add URLs to req.body
    req.body.images = images;
    const product = await ProductService.createProductService(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const data = await ProductService.getAllProductService();
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductByIdService(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    let finalImages = [];

    // Keep existing images
    if (req.body.existingImages) {
      if (Array.isArray(req.body.existingImages)) {
        finalImages = [...req.body.existingImages];
      } else {
        finalImages = [req.body.existingImages];
      }
    }

    // Upload new images if available
    if (req.files && req.files.length > 0) {
      for (let file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "products",
        });
        finalImages.push(result.secure_url);
      }
    }

    req.body.images = finalImages;

    const product = await ProductService.updateProductService(
      req.params.id,
      req.body
    );

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const product = await ProductService.deleteProductService(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
