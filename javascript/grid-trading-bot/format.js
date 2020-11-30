module.exports = {
    formatBalance: function (balance) {
        let output = ['Name | Available | On Order'];
        let keys = Object.keys(balance);
        for (var key of keys) {
            let entry = balance[key];
            if (entry.available > 0 || entry.onOrder > 0) {
                output.push(`${key} | ${entry.available} | ${entry.onOrder}`);
            }
        }
        return output.join('\n');
    },

    formatOpenOrders: function (orders) {
        let output = ['Name | Side | Price | Quantity | Total'];
        for (var o of orders) {
            output.push(`${o.symbol} | ${o.side} | $${+o.price} | ${+o.origQty} | $${(o.price * o.origQty).toFixed(2)}`);
        }
        return output.join('\n');
    }
};