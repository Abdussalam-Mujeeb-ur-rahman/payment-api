const productController = require('../controller/productController')
const router = require('express').Router()

router.get('/', productController.getAllProducts)
router.post('/', productController.createProduct)
router.put('/update/:id', productController.updateProductById)
router.delete('/delete/:id', productController.deleteProductById)
// router.post('/buy/:id', productController)


module.exports = router