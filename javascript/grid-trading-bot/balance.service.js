module.exports = {
    isSufficientFunds: function (order, balances) {
        const price = order.price,
            quantity = order.quantity;

        switch (order.side) {
            case 'BUY': {
                const required = price * quantity;
                const asset = this.getBuyAsset(order.symbol);
                const available = this.getAvailableBalance(asset, balances);

                return available >= required; // TODO: trade fee?
            }
            case 'SELL': {
                const required = quantity;
                const asset = this.getSellAsset(order.symbol);
                const available = this.getAvailableBalance(asset, balances);

                return available >= required; // TODO: trade fee?
            }
            default: {
                throw new Error('Unsupported order side: ' + order.side);
            }
        }
    },

    getBuyAsset: function (symbol) {
        switch (symbol) {
            case 'BTCUSDT': {
                return 'USDT';
            }
            default: {
                throw new Error('Unsupported buy symbol: ' + symbol);
            }
        }
    },

    getSellAsset: function (symbol) {
        switch (symbol) {
            case 'BTCUSDT': {
                return 'BTC';
            }
            default: {
                throw new Error('Unsupported buy symbol: ' + symbol);
            }
        }
    },

    getAvailableBalance: function (asset, balances) {
        const balance = this.getBalance(asset, balances);
        if (!balance) {
            throw new Error('Balance was not found for an asset: ' + asset);
        }

        return balance.available;
    },

    getBalance: function (asset, balances) {
        return balances.find(b => b.asset == asset);
    }
};