const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/api/products', ProductController.createProduct);
router.get('/api/products', ProductController.getAllProducts);
router.get('/api/products/:id', ProductController.getProductById);
router.put('/api/products/:id', ProductController.updateProduct);
router.delete('/api/products/:id', ProductController.deleteProduct);

module.exports = router;