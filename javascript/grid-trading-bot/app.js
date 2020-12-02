const config = require('./config');

const binanceService = require('./binance.service');

const binance = new binanceService({
    apikey: config.exchange.apikey,
    apisecret: config.exchange.apisecret
});

/* Start */
const pairs = config?.bot?.trading?.pairs;
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