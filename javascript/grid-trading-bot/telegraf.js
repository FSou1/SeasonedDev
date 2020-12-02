const config = require('./config');
const binanceService = require('./binance.service');
const format = require('./format');

const binance = new binanceService({
    apikey: config.exchange.apikey,
    apisecret: config.exchange.apisecret
});

const { Telegraf } = require('telegraf');

const bot = new Telegraf(config.bot.telegram.token);

bot.command('balance', (ctx) => {
    binance.getBalance()
        .then(data => ctx.reply(format.formatBalance(data)))
        .catch(error => console.error(error));
});

bot.command('openorders', (ctx) => {
    binance.getOpenOrders()
        .then(data => ctx.reply(format.formatOpenOrders(data)))
        .catch(error => console.error(error));
});

bot.command('btcusdt', (ctx) => {
    binance.getPrice('BTCUSDT')
        .then(data => ctx.reply(format.formatPrice(data)))
        .catch(error => console.error(error));
});

bot.command('trades', (ctx) => {
    binance.getTrades('BTCUSDT')
        .then(data => ctx.reply(format.formatTrades(data)))
        .catch(error => console.error(error));
});

bot.launch();