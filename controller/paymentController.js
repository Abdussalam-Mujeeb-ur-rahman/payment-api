const axios = require("axios");
const config = require("../config/config");
const db = require('../model')
const productModel = db.products


async function paymentWithCard(req, res) {
  try {

    const product_id = req.params.id
    const ProductToBuy = await productModel.findOne({
      where: {
        id: product_id
      }
    })
    
    if(ProductToBuy.status === 'sold') {
      return res.json({
        message: 'payment not successful!',
        data: 'product is sold!'
      })
    }

    const {
      email,
      phone,
      card_number,
      cvv,
      expiry_month,
      expiry_year,
      currency,
      tx_ref
    } = req.body;
    const amount = ProductToBuy.price

    const url = 'https://www.flutterwave.ng';
    const auth_token = config.key;
    const payload = {
      amount,
      customer: {
        email: email,
        phoneNumber: phone,
      },
      card: {
        number: card_number,
        cvv,
        expiry_month,
        expiry_year,
      },
      currency,
      tx_ref,
    };
    try {
      try {
        var response = await axios.post(url, payload, {
          headers: {
            Authorization: `Bearer ${auth_token}`,
          },
        });
        var { data } = response;
      } catch (error) {
        console.log(error)
        res.send(error)
      }

      const product = await productModel.update({status: 'sold'} , {
        where: {
            id: product_id
          }
    })

      res.status(200).json({
        message: "payment successful!",
        product: product
      });
    } catch (error) {
      console.log(`error from server, ${error}`);
      res.status(404).json({
        message: 'payment not successful!',
        error: `${error}`
      })
    }
  } catch (error) {
    res.status(500).send("please refresh your browser!");
  }
}

module.exports = {
  paymentWithCard,
};
