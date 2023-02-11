const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const productRouter = require('./routes/product')
const paymentRouter = require('./routes/payment')
const userRouter = require('./routes/user')
const logger = require('morgan')
const morgan = require('morgan')
require('dotenv').config()
const PORT = process.env.PORT || 3030
const authentication = require('./authentication/auth')
const cookieParser = require('cookie-parser')

app.use(express.static('views'))
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(cookieParser())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('homePage')
})

app.use('/product', authentication, productRouter)
app.use('/payment', authentication, paymentRouter)
app.use('/user', userRouter)


app.use((error, req, res, next) => {
    console.log(`error middleware called!, ${error}`)
    next()
})

app.listen(PORT, () => {
    console.log(`server is running!`)
})
