const Products = require("../models/product.model");

// Create Product
module.exports.createProduct = (req, res) => {
    Products.create(req.body)
        .then((product) => { res.json({ results: product }) })
        .catch(err => res.status(400).json({ err: err }))
}

// Read All Products
module.exports.allProduct = (req, res) => {
    Products.find()
        .then((allProducts) => { res.json({ results: allProducts }) })
        .catch(err => res.json({ err: err }))
}

// Read One Product
module.exports.oneProduct = (req, res) => {
    Products.findOne({ _id: req.params.id })
        .then(oneProduct => { res.json({ results: oneProduct }) })
        .catch(err => res.json({ err: err }))
}

// Update Product
module.exports.updateProduct = (req, res) => {
    Products.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(product => { res.json({ results: product }) })
        .catch(err => res.json({ err: err }))
}

// Delete Product
module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(deletedProduct => { res.json({ results: deletedProduct }) })
        .catch(err => res.json({ err: err }))
}