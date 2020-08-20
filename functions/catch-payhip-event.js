// https://payhip.com/support/webhooks/
// Example POST payload (note that price is cents, not dollars):
/*
{
  "id": "1603801",
  "email": "abs@payhip.com",
  "currency": "USD",
  "price": 923,
  "vat_applied": true,
  "vat_amount": 173,
  "vat_country": "Ireland",
  "ip_address": "62.40.63.255",
  "items": [
    {
      "product_id": "29129",
      "product_name": "Book Title",
      "product_permalink": "https:\/\/payhip.com\/b\/k9Ew"
    }
  ],
  "coupons": [
    {
      "code": "26FDEC7CDV",
      "percentage": 25,
      "amount": 250
    }
  ]
}
*/

exports.handler = async (event) => {
  const { id, email, price } = ;
  return {
    statusCode: 200,
    body: event.body,
  };
};