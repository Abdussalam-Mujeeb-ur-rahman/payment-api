# Project: Payment API - Express, MySQL, and Flutterwave API

This project is a Payment API that enables users to make payments using their debit cards. The API is built using the Flutterwave API, a powerful tool that allows businesses to make and accept payments anywhere from across Africa and around the world.

## Overview

The API provides a seamless and secure way for users to pay for goods and services using their debit cards. It supports both local and international cards, making it easy for businesses to accept payments from customers globally.

The API leverages Flutterwave's Direct Card Charge feature to process payments. This feature allows businesses to charge both local and international cards. This is particularly useful for businesses whose customers predominantly use credit/debit cards and prefer to manage payments via the business's app.

### link to postman - https://documenter.getpostman.com/view/23410424/2s935pr4Yn

##POST >> signup

```
https://abdussalam-shop-api.onrender.com/user/signup
```

```
{
    "name": "Abbey Salami",
    "email": "heba@gmail.com",
    "phoneNumber": "0815534221",
    "password": "123456"
}
```

## POST  >> login

```
https://abdussalam-shop-api.onrender.com/user/login
```

```
{
  "email": "heba@gmail.com",
  "password": "123456"
}
```


##POST >> add product

```
https://abdussalam-shop-api.onrender.com/product
```

```
{
  "name": "reddit",
  "price": 70
}
```


## GET  >> get all products

```
https://abdussalam-shop-api.onrender.com/product
```


## PUT  >> update product by Id

```
https://abdussalam-shop-api.onrender.com/product/update/1
```
1 represents the id of the product
```
{
  "image": "reddit.jpg"
}
```


##  DELETE  >> delete product by Id

```
https://abdussalam-shop-api.onrender.com/product/delete/6
```
6 represents the id of the product


##POST >> pay with card

```
https://abdussalam-shop-api.onrender.com/payment/card/1
```
1 represent the id of the product

```
const details = {
   "card_number":"5531886652142950",
   "cvv":"564",
   "expiry_month":"09",
   "expiry_year":"32",
   "currency":"NGN",
   "tx_ref":"MC-3243e"
};
```
### Things i am looking forward to do:
- Write test 
- Draft the complete documentation
