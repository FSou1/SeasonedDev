const { Client, Intents } = require('discord.js');
const { fetchItems } = require('./ebay');

require('dotenv').config();

const getMessage = (item) => {
  return item.link + '\r\n' + `**$${item.price}**`;
}

const sendMessages = (client, channelId, items) => {
  items.forEach((item) => {
    const message = getMessage(item)

    client.channels.cache
      .get(channelId)
      .send(message);
  });
}

const timeLeftIsLessThan = (item, min) => {
  const regexp = new RegExp(`^[1-${min}]{1}m left`);

  return regexp.test(item.timeLeft);
}

const filterItems = (items) => {
  return items.filter(item => timeLeftIsLessThan(item, process.env.NOTIFY_WHEN_TIME_LEFT_MIN));
}

const preventDuplicates = (items, recentMessages) => {
  return items.filter(item => !recentMessages.any(message => message.includes(item.link)));
}

const fetchAndNotify = (client, url, channelId) => {
  return fetchItems(url)
    .then(items => {
      console.log('Fetched ' + items.length + ' items');
      if (!items || items.length <= 0) {
        console.warn('No items fetched');
      }

      const filtered = filterItems(items);
      if (!filtered || filtered.length <= 0) {
        return;
      }

      const recentMessages = fetchMessages(client, channelId, 50);
      const itemsToNotify = preventDuplicates(filtered, recentMessages);

      if (!itemsToNotify || itemsToNotify.length <= 0) {
        return;
      }

      sendMessages(client, channelId, itemsToNotify);
    });
};

const watch = async (client, url, channelId) => {
  await fetchAndNotify(client, url, channelId);

  setInterval(async () => {
    await fetchAndNotify(client, url, channelId)
  }, process.env.WATCH_INTERVAL_SEC * 1000);
}

const onReady = async (client) => {
  console.log(client.user.tag + ' is running');

  await watch(client, process.env.EBAY_ALLGPUUS_URL, process.env.DISCORDJS_ALLGPUUS_CHANNEL_ID);
  await watch(client, process.env.EBAY_ALLCPUUS_URL, process.env.DISCORDJS_ALLCPUUS_CHANNEL_ID);
}

const getChannel = (client, channelId) => {
  return client.channels.cache.get(channelId);
}

const fetchMessages = (client, channelId, limit) => {
  return getChannel(client, channelId).messages.fetch({ limit });
}

(async function () {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });

  client.on('ready', () => onReady(client));

  client.login(process.env.DISCORDJS_BOT_TOKEN);
})();