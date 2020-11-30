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
    binance.getBalance().then(data => ctx.reply(format.formatBalance(data)));
});

bot.command('openorders', (ctx) => {
    binance.getOpenOrders().then(data => ctx.reply(format.formatOpenOrders(data)));
});

bot.launch();