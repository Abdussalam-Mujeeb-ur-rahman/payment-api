const router = require('express').Router()
const db = require("../model");
const userModel = db.users;
const userController = require('../controller/userController')

router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router