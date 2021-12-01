const express = require('express')
const userController = require('../controllers/userController');

const router = express.Router()



router
    .route('/')
    .get()
    .post(userController.createUser)




module.exports = router