const binanceApi = require('node-binance-api');

let service = function BinanceService(options = {}) {
    let BinanceService = this;
    BinanceService.options = options;
    BinanceService.exchange = new binanceApi().options({
        APIKEY: BinanceService.options.apikey,
        APISECRET: BinanceService.options.apisecret
    });

    return {
        getPrice: (symbol) => {
            return BinanceService.exchange.prices(symbol)
                .then(data => Number.parseFloat(data[symbol]))
                .catch(error => {
                    throw new Error(error);
                });
        },

        getOpenOrders: (symbol) => {
            return BinanceService.exchange.openOrders(symbol)
                .catch(error => {
                    throw new Error(error);
                });
        },

        getBalance: () => {
            return BinanceService.exchange.balance()
                .catch(error => {
                    throw new Error(error);
                });
        },

        getTrades: (symbol) => {
            return BinanceService.exchange.trades(symbol)
                .catch(error => {
                    throw new Error(error);
                });
        }
    };
};

module.exports = service;