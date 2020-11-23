const utils = require('./utils');
const balance = require('./balance.service');

module.exports = {
    getNextOrders: function (price, pair, openOrders = [], balances = [], completedOrders = []) {
        const buy = this.getNextBuyOrder(price, pair, openOrders, balances, completedOrders);
        const sell = this.getNextSellOrder(price, pair, openOrders, balances, completedOrders);

        return {
            buy,
            sell
        };
    },

    getNextBuyOrder: function (price, pair, openedOrders = [], balances = [], completedOrders = []) {
        const buyPrice = this.getBuyPrice(price, pair);
        if (!buyPrice) {
            return null;
        }

        const buyOrder = {
            symbol: pair.symbol,
            side: 'BUY',
            quantity: pair.quantity,
            price: buyPrice
        };

        const isSufficient = balance.isSufficientFunds(buyOrder, balances);
        if (!isSufficient) {
            return null;
        }

        const openedDuplicate = openedOrders
            .find(o => o.side === buyOrder.side
                && o.symbol === buyOrder.symbol
                && o.price === buyOrder.price);

        if (openedDuplicate) {
            return null;
        }

        const lastCompletedBuy = this.getLastCompleted(buyOrder.side, buyOrder.symbol, completedOrders);
        if(lastCompletedBuy && lastCompletedBuy.price === buyOrder.price) {
            return null;
        }

        return buyOrder;
    },

    getBuyPrice: function (price, pair) {
        const highest = pair.highest,
            lowest = pair.lowest;

        if (price < lowest || price > highest) {
            return null;
        }

        const step = (pair.highest - pair.lowest) / pair.levels;

        const buyPrice = price === pair.highest
            ? utils.roundDown(price - 1, step)
            : utils.roundDown(price, step);

        return buyPrice;
    },

    getNextSellOrder: function (price, pair, openedOrders = [], balances = [], completedOrders = []) {
        const sellPrice = this.getSellPrice(price, pair);
        if (!sellPrice) {
            return null;
        }

        const sellOrder = {
            symbol: pair.symbol,
            side: 'SELL',
            quantity: pair.quantity,
            price: sellPrice
        };

        const isSufficient = balance.isSufficientFunds(sellOrder, balances);
        if (!isSufficient) {
            return null;
        }

        const openedDuplicate = openedOrders
            .find(o => o.side === sellOrder.side
                && o.symbol === sellOrder.symbol
                && o.price === sellOrder.price);

        if (openedDuplicate) {
            return null;
        }

        const lastCompletedSell = this.getLastCompleted(sellOrder.side, sellOrder.symbol, completedOrders);
        if(lastCompletedSell && lastCompletedSell.price === sellOrder.price) {
            return null;
        }

        return sellOrder;
    },

    getLastCompleted: function(side, symbol, completedOrders) {
        return completedOrders
            .filter(o => o.side === side && o.symbol === symbol)
            .sort((a, b) => b.updateTime - a.updateTime)
            .pop();
    },

    getSellPrice: function (price, pair) {
        const highest = pair.highest,
            lowest = pair.lowest;

        if (price < lowest || price > highest) {
            return null;
        }

        const step = (pair.highest - pair.lowest) / pair.levels;

        const sellPrice = price === pair.lowest
            ? utils.roundUp(price + 1, step)
            : utils.roundUp(price, step);

        return sellPrice;
    },
};