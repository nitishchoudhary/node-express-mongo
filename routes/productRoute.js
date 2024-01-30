const express = require('express');
const Product = require('../models/productModel');
const {
    getProducts,
    createProducts,
    getProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');
const router = express.Router();

//get all products 
router.get('/', getProducts);

//product save
router.post('/', createProducts);

//get one product
router.get('/:id', getProduct);

//update the product
router.put('/:id', updateProduct);

//delete a product

router.delete('/:id', deleteProduct);


module.exports = router;