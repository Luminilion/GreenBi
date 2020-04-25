
const express = require('express')
const app = express()

const stripe = require('stripe')('sk_test_1k8Joe5seGoefrm2czcMUjJB00LforLwQ6')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/', function (req, res) {

    res.send('Hello World!')
})

app.get('/secret', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 100,
        currency: 'usd',
        metadata: {
            integration_check: 'accept_a_payment'
        },
    });
    res.json({client_secret: paymentIntent.client_secret});
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

