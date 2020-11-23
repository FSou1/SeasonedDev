const balance = require('./balance.service');
const service = require('./order.service');

const pair = {
    symbol: 'BTCUSDT',
    highest: 14500,
    lowest: 12500,
    quantity: 0.00085,
    levels: 8
};

jest.mock('./balance.service');

describe('create buy & sell orders if', () => {
    test.each([
        [12640, 12500, 12750],
        [13100, 13000, 13250],
        [14300, 14250, 14500],
    ])('price (%i), it is sufficient funds + there are no open orders', (price, buyPrice, sellPrice) => {
        const openOrders = [];

        balance.isSufficientFunds = jest.fn().mockReturnValue(true);

        const nextOrders = service.getNextOrders(price, pair, openOrders);
        expect(nextOrders).toStrictEqual({
            buy: {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: pair.quantity,
                price: buyPrice
            },
            sell: {
                symbol: 'BTCUSDT',
                side: 'SELL',
                quantity: pair.quantity,
                price: sellPrice
            }
        });
    });
});

describe('create a sell order only if', () => {
    test.each([
        [12600, 12500, 12750]
    ])('price (%i), the last completed order (%i) is a buy duplicate', (price, lastBuyPrice, sellPrice) => {
        const openOrders = [];
        const completedOrders = [
            {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: pair.quantity,
                price: lastBuyPrice,
                updateTime: 1604617029107
            }
        ];
        const balances = [
            {
                asset: 'BTC',
                available: 0.06
            },
            {
                asset: 'USDT',
                available: 660
            }
        ];

        const nextOrders = service.getNextOrders(price, pair, openOrders, balances, completedOrders);
        expect(nextOrders).toStrictEqual({
            buy: null,
            sell: {
                symbol: 'BTCUSDT',
                side: 'SELL',
                quantity: pair.quantity,
                price: sellPrice
            }
        });
    });
});

describe('create a buy order only if', () => {
    test.each([
        [12749, 12750, 12500]
    ])('price (%i), the last completed order (%i) is a buy duplicate', (price, lastSellPrice, buyPrice) => {
        const openOrders = [];
        const completedOrders = [
            {
                symbol: 'BTCUSDT',
                side: 'SELL',
                quantity: pair.quantity,
                price: lastSellPrice,
                updateTime: 1604617029107
            }
        ];
        const balances = [
            {
                asset: 'BTC',
                available: 0.06
            },
            {
                asset: 'USDT',
                available: 660
            }
        ];

        const nextOrders = service.getNextOrders(price, pair, openOrders, balances, completedOrders);
        expect(nextOrders).toStrictEqual({
            buy: {
                symbol: 'BTCUSDT',
                side: 'BUY',
                quantity: pair.quantity,
                price: buyPrice
            },
            sell: null
        });
    });
});

describe('do not create orders if', () => {
    test.each([
        [12499], 
        [14501]
    ])('a price is out of range (%i)', (price) => {
        const nextOrders = service.getNextOrders(price, pair);
        expect(nextOrders).toStrictEqual({
            buy: null,
            sell: null
        });
    });

    test('it is not sufficient funds', () => {
        const price = 12750;
        const openOrders = [];

        balance.isSufficientFunds = jest.fn().mockReturnValue(false);

        const nextOrders = service.getNextOrders(price, pair, openOrders);
        expect(nextOrders).toStrictEqual({
            buy: null,
            sell: null
        });
    });

    test('there are open orders above and below price', () => {
        const price = 12501;
        const openOrders = [
            {
                symbol: 'BTCUSDT',
                side: 'BUY',
                price: 12500,
                quantity: 0.00085,
                status: 'NEW'
            },
            {
                symbol: 'BTCUSDT',
                side: 'SELL',
                price: 12750,
                quantity: 0.00085,
                status: 'NEW'
            }
        ];

        balance.isSufficientFunds = jest.fn().mockReturnValue(true);

        const nextOrders = service.getNextOrders(price, pair, openOrders);
        expect(nextOrders).toStrictEqual({
            buy: null,
            sell: null
        });
    });
});

describe('buy price', () => {
    test.each([
        [12499, null],
        [14501, null]
    ])('is null if the current price (%i) is out of range', (currentPrice, expectedBuyPrice) => {
        const buyPrice = service.getBuyPrice(currentPrice, pair);
        expect(buyPrice).toBe(expectedBuyPrice);
    });

    test.each([
        [12500, 12500],
        [12501, 12500],
        [12750, 12750],
        [12751, 12750],
        [14250, 14250],
        [14499, 14250],
        [14500, 14250]
    ])('is above or equal the current price (%i)', (currentPrice, expectedBuyPrice) => {
        const buyPrice = service.getBuyPrice(currentPrice, pair);
        expect(buyPrice).toBe(expectedBuyPrice);
    });
});

describe('sell price', () => {
    test.each([
        [12499, null],
        [14501, null]
    ])('is null if the current price (%i) is out of range', (currentPrice, expectedSellPrice) => {
        const sellPrice = service.getSellPrice(currentPrice, pair);
        expect(sellPrice).toBe(expectedSellPrice);
    });

    test.each([
        [12500, 12750],
        [12501, 12750],
        [12750, 12750],
        [12751, 13000],
        [14250, 14250],
        [14499, 14500],
        [14500, 14500]
    ])('is above or equal to the current price (%i)', (currentPrice, expectedSellPrice) => {
        const sellPrice = service.getSellPrice(currentPrice, pair);
        expect(sellPrice).toBe(expectedSellPrice);
    });
});