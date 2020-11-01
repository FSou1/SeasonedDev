require('dotenv').config();

// Configuration
var configuration = {
    bot: {
        trading: {

        }
    },
    exchange: {
        apikey: process.env.APIKEY,
        apisecret: process.env.APISECRET
    }
};

// Run time
console.log(configuration.exchange.apikey);
console.log(configuration.exchange.apisecret);