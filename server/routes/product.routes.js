const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    // Create Product
    app.post("/api/products/new", ProductController.createProduct);

    // Read All Products
    app.get("/api/products", ProductController.allProduct);

    // Read One Product
    app.get("/api/products/:id", ProductController.oneProduct);

    // Update Product
    app.put("/api/products/update/:id", ProductController.updateProduct);

    // Delete Product 
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}