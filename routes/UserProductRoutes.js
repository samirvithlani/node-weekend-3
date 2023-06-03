const router = require('express').Router();
const userProductController = require('../controller/UserOrderController');
router.post('/userproduct',userProductController.addProductToCart)
router.get('/userproduct',userProductController.getAllProductsFromCart)
module.exports = router;