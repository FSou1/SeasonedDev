require('dotenv').config();

// Configuration
var configuration = {
    bot: {
        trading: {
            pairs: [
                {
                    ticker: 'BTCUSDT',  /* Trading pair */
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


const binanceApi = require('node-binance-api');

const binance = new binanceApi().options({
    APIKEY: configuration.exchange.apikey,
    APISECRET: configuration.exchange.apisecret
});

// binance.balance((error, balances) => {
//     if (error) return console.error(error);
//     console.info("Balances:", balances);
// });

// binance.prices(null, (error, tickers) => {
//     if (error) return console.error(error);
//     console.log('BTCUSDT: ', tickers.BTCUSDT);
// });

// binance.prices('BTCUSDT', (error, ticker) => {
//     if (error) return console.error(error);
//     console.log('BTCUSDT: ', ticker.BTCUSDT);
// });

// binance.openOrders(false, (error, openOrders) => {
//     console.info("openOrders()", openOrders);
// });

async function getPrice(ticker) {
    return binance.prices(ticker)
        .then(data => data[ticker])
        .then(data => Number.parseFloat(data));
}

function round(value) {
    return Math.round(value * 100) / 100
}

function roundUp(num, precision) {
    return Math.ceil(num / precision) * precision;
}

function roundDown(num, precision) {
    return Math.floor(num / precision) * precision;
}

/* Highest can not be a buy order */
/* Lowest can be a buy order */
function getBuyOrders(price, pair) {
    const orders = [];

    const highest = pair.highest,
        lowest = pair.lowest;

    if (price < lowest || price >= highest) {
        return orders;
    }

    const step = (highest - lowest) / pair.levels;

    let current = roundDown(price, step);

    while (current >= lowest) {
        orders.push({
            ticker: pair.ticker,
            type: 'BUY',
            quantity: pair.quantity,
            price: current
        });

        current -= step;
    }

    return orders;
}

/* Highest can be a sell order */
/* Lowest can not be a sell order */
function getSellOrders(price, pair) {
    const orders = [];

    const highest = pair.highest,
        lowest = pair.lowest;

    if (price <= lowest || price > highest) {
        return orders;
    }

    const step = (highest - lowest) / pair.levels;

    let current = roundUp(price, step);

    while (current <= highest) {
        orders.push({
            ticker: pair.ticker,
            type: 'SELL',
            quantity: pair.quantity,
            price: current
        });

        current += step;
    }

    return orders;
}

async function buildOrders() {
    if (!configuration?.bot?.trading?.pairs?.length) {
        throw new Error('Configuration error: pairs is null or empty')
    }

    const pair = configuration?.bot?.trading?.pairs[0];

    getPrice(pair.ticker)
        .then(price => {
            const buyOrders = getBuyOrders(price, pair)
                .splice(0, pair.depth);

            const sellOrders = getSellOrders(price, pair)
                .splice(0, pair.depth);

            const totalOrders = []
                .concat(buyOrders, sellOrders)
                .sort((a, b) => b.price - a.price);

            console.log(totalOrders);
        })
        .catch(error => {
            throw new Error(error);
        });
}

buildOrders();

// console.log('16000: ', getSellOrders(16000, configuration?.bot?.trading?.pairs[0]));
// console.log('14500: ', getSellOrders(14500, configuration?.bot?.trading?.pairs[0]));
// console.log('14499: ', getSellOrders(14499, configuration?.bot?.trading?.pairs[0]));
// console.log('13000: ', getSellOrders(13000, configuration?.bot?.trading?.pairs[0]));
// console.log('12500: ', getSellOrders(12500, configuration?.bot?.trading?.pairs[0]));
// console.log('5000: ', getSellOrders(5000, configuration?.bot?.trading?.pairs[0]));

// console.log('16000: ', getBuyOrders(16000, configuration?.bot?.trading?.pairs[0]));
// console.log('14500: ', getBuyOrders(14500, configuration?.bot?.trading?.pairs[0]));
// console.log('14499: ', getBuyOrders(14499, configuration?.bot?.trading?.pairs[0]));
// console.log('13000: ', getBuyOrders(13000, configuration?.bot?.trading?.pairs[0]));
// console.log('12500: ', getBuyOrders(12500, configuration?.bot?.trading?.pairs[0]));
// console.log('5000: ', getBuyOrders(5000, configuration?.bot?.trading?.pairs[0]));