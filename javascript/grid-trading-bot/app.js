require('dotenv').config();

// Configuration
var configuration = {
    bot: {
        trading: {
            pairs: [
                {
                    symbol: 'BTCUSDT',  /* Trading pair */
                    highest: 14500,     /* Highest border */
                    lowest: 12500,      /* Lowest border */
                    quantity: 0.00085,  /* Quantity per trade */
                    levels: 8,          /* Number of levels in a grid */
                    depth: 1            /* Depth of orders out of a price */
                }
            ]
        }
    },
    exchange: {
        apikey: process.env.APIKEY,
        apisecret: process.env.APISECRET
    }
};

const binanceService = require('./binance.service');

const binance = new binanceService({
    apikey: configuration.exchange.apikey,
    apisecret: configuration.exchange.apisecret
});

/* Start */
const pairs = configuration?.bot?.trading?.pairs;
if (!pairs?.length) {
    throw new Error('Configuration error: pairs is null or empty')
}

const pair = pairs[0];

function main() {
    binance.getPrice(pair.symbol)
        .then(data => console.log(data));

    binance.getOpenOrders(pair.symbol)
        .then(data => console.log(data));

    binance.getBalance()
        .then(data => console.log(data));

    binance.getTrades(pair.symbol)
        .then(data => console.log(data));
}

setInterval(main, 30000);