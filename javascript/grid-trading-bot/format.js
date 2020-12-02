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
        let output = ['Date | Side | Name | Price | Quantity | Total'];
        for (var o of orders) {
            let parts = [
                this.formatDate(o.updateTime),
                o.side,
                o.symbol,
                this.formatPrice(o.price),
                +o.origQty,
                this.formatTotal(o.price, o.origQty)
            ];
            output.push(parts.join('|'));
        }
        return output.join('\n');
    },

    formatTrades: function (trades) {
        let output = ['Date | Side | Name | Price | Quantity | Commission | Total'];
        for(var t of trades) {
            let parts = [
                this.formatDate(t.time),
                this.formatBuyer(t.isBuyer),
                t.symbol,
                this.formatPrice(t.price),
                +t.qty,
                +t.commission,
                this.formatTotal(t.price, t.qty)
            ];
            output.push(parts.join('|'));
        }
        return output.join('\n');
    },

    formatPrice: function (price) {
        return `$${+price}`;
    },
    
    formatTotal: function (price, qty) {
        return `$${(price * qty).toFixed(2)}`;
    },

    formatBuyer: function(isBuyer) {
        return isBuyer ? 'BUY' : 'SELL';
    },

    formatDate: function(timestamp) {
        return (new Date(timestamp)).toLocaleDateString();
    }
};