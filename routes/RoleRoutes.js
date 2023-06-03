const express = require('express');
const router = express.Router();
const roleController = require('../controller/RoleController')
router.post('/role',roleController.addRole)
router.get('/role',roleController.getRoleData)
module.exports = router