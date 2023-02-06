const axios = require("axios");
const config = require("../config/config");
const db = require('../model')
const productModel = db.products
async function paymentWithCard(req, res) {
  try {

    const product_id = req.params.id
    const soldProduct = productModel.findAll({
      where: {
        id: product_id,
        status: 'sold'
      }
    })
    if(soldProduct) {
      return res.json({
        message: 'payment not successfully!',
        data: 'product is sold!'
      })
    }

    const {
      amount,
      email,
      phone,
      card_number,
      cvv,
      expiry_month,
      expiry_year,
      currency,
      tx_ref,
    } = req.body;

    const url = "https://api.flutterwave.com/v3/charges";
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
      const response = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${auth_token}`,
        },
      });
      const { data } = response;

      const product = await productModel.update({status: 'sold'} , {
        where: {
            id: product_id
          }
    })

      res.status(200).json({
        message: "payment successful!",
        data: data,
        product: product
      });
    } catch (error) {
      console.log(`error from server, ${error.response.data}`);
      res.status(404).json({
        message: 'payment not successful!',
        error: `${error.response.data}`
      })
    }
  } catch (error) {
    res.status(500).send("please refresh your browser!");
  }
}

module.exports = {
  paymentWithCard,
};
