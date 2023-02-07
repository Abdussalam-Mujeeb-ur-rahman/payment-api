##SHOP-API >>> by Abdussalam Mujeeb-ur-rahman

##This API validates debit card payment

##POST >> pay with card

```
http://localhost:3000/payment/card/1
```
send a post request to the route including the product_id. for example -"http: / /localhost: 3000/payment/card/(product_id)"

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