const service = require('./balance.service');

describe('it is sufficient funds for', () => {
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

    test('a buy order', () => {
        const order = {
            symbol: 'BTCUSDT',
            side: 'BUY',
            quantity: 0.05,
            price: 13000
        };
        const isSufficient = service.isSufficientFunds(order, balances);
        expect(isSufficient).toBe(true);
    });

    test('a sell order', () => {
        const order = {
            symbol: 'BTCUSDT',
            side: 'SELL',
            quantity: 0.05,
            price: 13250
        };
        const isSufficient = service.isSufficientFunds(order, balances);
        expect(isSufficient).toBe(true);
    });
});

describe('it is insufficient funds for', () => {
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

    test('a buy order', () => {
        const order = {
            symbol: 'BTCUSDT',
            side: 'BUY',
            quantity: 0.06,
            price: 13000
        };
        const isSufficient = service.isSufficientFunds(order, balances);
        expect(isSufficient).toBe(false);
    });

    test('a sell order', () => {
        const order = {
            symbol: 'BTCUSDT',
            side: 'SELL',
            quantity: 0.07,
            price: 13250
        };
        const isSufficient = service.isSufficientFunds(order, balances);
        expect(isSufficient).toBe(false);
    });
});

describe('returns a correct asset for a symbol', () => {
    test('USDT is a buy asset for BTCUSDT', () => {
        const asset = service.getBuyAsset('BTCUSDT');
        expect(asset).toBe('USDT');
    });

    test('BTC is a sell asset for BTCUSDT', () => {
        const asset = service.getSellAsset('BTCUSDT');
        expect(asset).toBe('BTC');
    });
});

describe('returns a correct balance for an asset', () => {
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

    test('if BTC', () => {
        const asset = 'BTC';
        const available = service.getAvailableBalance(asset, balances);
        expect(available).toBe(0.06);
    });

    test('if USDT', () => {
        const asset = 'USDT';
        const available = service.getAvailableBalance(asset, balances);
        expect(available).toBe(660);
    });
});