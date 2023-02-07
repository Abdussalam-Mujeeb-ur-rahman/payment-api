##SHOP-API >>> by Abdussalam Mujeeb-ur-rahman

##This API validates debit card payment

##POST >> signup

```
http://localhost:3000/user/signup
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
http://localhost:3000/user/login
```

```
{
  "email": "heba@gmail.com",
  "password": "123456"
}
```


##POST >> add product

```
http://localhost:3000/product
```

```
{
  "name": "reddit",
  "price": 70
}
```


## GET  >> get all products

```
http://localhost:3000/product
```


## PUT  >> update product by Id

```
http://localhost:3000/product/update/1
```
1 represents the id of the product
```
{
  "image": "reddit.jpg"
}
```


##  DELETE  >> delete product by Id

```
http://localhost:3000/product/delete/6
```
6 represents the id of the product


##POST >> pay with card

```
http://localhost:3000/payment/card/1
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