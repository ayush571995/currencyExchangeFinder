const { resolve } = require("path");
var request = require("request-promise");


const promisifiedRequest = function(options){
    return  new Promise((resolve,reject) => {
        request(options, function (error, response, body) {
           if (error) return reject(error);
           if (response) return resolve(response)
       });
       });
}

const getRates = async (symbols) =>{
   
    var options = { method: 'GET',
  url: 'https://api.apilayer.com/exchangerates_data/latest',
  qs: { base: 'USD', symbols: symbols },
  headers: 
   { 
     apikey: '' 
    } };
    let response = await promisifiedRequest(options);
    return response.body;
}

exports.getCurrencyRates = getRates;