const router = require('express').Router();
const productController = require('../controller/ProductController');

router.post('/product',productController.addProduct)
router.get('/product',productController.getAllProducts)

module.exports = router;
