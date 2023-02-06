const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const productRouter = require('./routes/product')
const paymentRouter = require('./routes/payment')
const logger = require('morgan')
const morgan = require('morgan')
require('dotenv').config()
const PORT = process.env.PORT || 3030

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('welcome to my shop-api')
})

app.use('/product', productRouter)
app.use('/payment', paymentRouter)


app.use((error, req, res, next) => {
    console.log(`error middleware called!, ${error}`)
    next()
})

app.listen(PORT, () => {
    console.log(`server is running!`)
})
