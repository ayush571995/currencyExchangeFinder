var express = require('express');
const querystring = require("querystring");
const currency = require("./currencyFetcher")

var app = express();

app.get('/api/v1/currency/getrate', async function (req, res) {
    currencyResponse =  await currency.getCurrencyRates(req.query.symbols)
    console.log(currencyResponse)
    res.send(currencyResponse)
    
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})