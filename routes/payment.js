const router = require("express").Router();
const paymentController = require("../controller/paymentController");
const axios = require("axios");
const config = require('../config/config')
const productModel = require('../model/products')

router.get('/', () => console.log('payment!'))

router.post("/card/:id", paymentController.paymentWithCard);




module.exports = router;
