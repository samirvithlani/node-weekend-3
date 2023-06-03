const router = require('express').Router();
const categoryController = require('../controller/CategoryController');
router.post('/category',categoryController.addBulkCategory)
module.exports = router;