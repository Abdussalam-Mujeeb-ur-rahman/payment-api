##SHOP-API >>> by Abdussalam Mujeeb-ur-rahman

##This API validates debit card payment

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