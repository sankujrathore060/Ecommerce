const router = require("express").Router();
//const KEY = process.env.STRIPE_KEY
const stripe = require("stripe")('sk_test_51K4R9RSCICTyxlD8sbN4abVKTh2WklVCvxvH4h2fhvEAbCK2QRhShyFRL1GSwcR6wxzJFAUT6lIscRCyl2M4CAph00A9Ooqu5s');
// const Stripe = require('stripe');
// const stripe = Stripe(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "INR",
      description: "test",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;