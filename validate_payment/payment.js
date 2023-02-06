

async function makePayment(
    amount,
    customer_email,
    customer_phone,
    card_number,
    cvv,
    expiry_month,
    expiry_year,
    currency,
    tx_ref
  ) 
  const payment = makePayment(
    10000,
    "mjbabdussalam@gmail.com",
    "09035169648",
    "4123450131001381",
    "759",
    "12",
    "2023",
    "NGN",
    "payment_ref_123"
  );