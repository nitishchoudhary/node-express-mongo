const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

//get all products
const getProducts = asyncHandler(async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//create the products
const createProducts = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get single product

const getProduct = asyncHandler(async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//update a product

const updateProduct = asyncHandler(async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `can not find any product with id ${id}`});
        }
        const updatedData = await Product.findById(id);
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//delete a product

const deleteProduct = asyncHandler(async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({message: `can not find any product with id ${id}`});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = {
    getProducts,
    createProducts,
    getProduct,
    updateProduct,
    deleteProduct
}