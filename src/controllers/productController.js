const Product = require('../models/productModel');

// 1. Create a new product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

// 2. Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 3. Get a single product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({message: "Product Not Found"});
        }
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//4. Update a product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({message: "Product Not Found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//5. Delete a Product

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (product) {
            res.json({message: "Product succesfully deleted"});
        } else {
            res.status(404).json({message: "Product not found"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
};

