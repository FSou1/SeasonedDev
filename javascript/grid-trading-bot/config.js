require('dotenv').config();

module.exports = {
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
        },
        telegram: {
            token: process.env.BOT_TOKEN
        }
    },
    exchange: {
        apikey: process.env.APIKEY,
        apisecret: process.env.APISECRET
    }
};