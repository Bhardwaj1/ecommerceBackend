const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({ origin: "*" }));
const productCategoryRoutes = require("./routes/productCategory.routes");
const productSubCategoryRoutes = require("./routes/productSubCategory.routes");
const productRoutes = require("./routes/product.routes");
// Middlewares
app.use(express.json());

// Routes
app.use("/api/productCategories", productCategoryRoutes);
app.use("/api/product-subCategory", productSubCategoryRoutes);
app.use("/api/products", productRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "API Working!" });
});

module.exports = app;
