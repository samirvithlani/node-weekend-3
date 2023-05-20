//middleware.. app controller...
const express = require('express');
const router = express.Router();
const userController = require('../controller/UserController');

// router.get('/user',(req,res)=>{

// })
router.get('/user',userController.getuserData)
router.post('/user',userController.postUserData)
router.get('/userdb',userController.getUserDataFromDb)
router.get('/user/:id',userController.getUserbyId)
router.get('/userbycond',userController.getUserByCond)
module.exports = router;
