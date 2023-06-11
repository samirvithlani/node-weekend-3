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
router.post('/adduser',userController.addUser)
router.get('/userwithrole',userController.getUserWithRole)
router.delete('/user/:id',userController.deleteUser)
router.delete('/userbycond',userController.deleetUseByCond)
router.put('/user/:id',userController.updateUser)
router.put('/userhobbies/:id',userController.addHobbies)
module.exports = router;
