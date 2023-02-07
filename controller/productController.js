
const db = require('../model')
const productModel = db.products


async function getAllProducts (req, res){
    try {
        const products = await productModel.findAll()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

async function createProduct (req, res){
    try {
        const { name, price, image } = req.body
        const product = await productModel.create({ name, price, image })
        res.status(201).json({
            message: 'product added successfully!',
            data: product
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateProductById(req, res){
    const productId = req.params.id;
    const productUpdateInfo = req.body
    try {
        const product = await productModel.update(productUpdateInfo, {
            where: {
                id: productId
              }
        })
        res.status(201).json({
            message: `product updated successfully!`,
            data: product
        })
    } catch (error) {
        res.status(500).send('please refresh your browser!')
        console.log(error)
    }
}

async function deleteProductById(req, res){
    const productId = req.params.id
    try {
        const findProduct = await productModel.findOne({
            where: { id: productId }
        })
        if(!findProduct){
            return res.send('product not found!, it probably might have been deleted!')
        }
        const product = await productModel.destroy({
            where: { id: productId }
        })
        res.status(200).json({
            message: 'product deleted successfully!'
        })
    } catch (error) {
        res.status(500).send('Please refresh your browser!')
        console.log('error deleting product' + " " + error)
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProductById,
    deleteProductById
}