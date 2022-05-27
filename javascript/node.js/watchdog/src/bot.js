const { Client, Intents  } = require('discord.js');

require('dotenv').config();

const connect = (callback) => {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
  });

  client.on('ready', () => callback(client));

  client.login(process.env.DISCORDJS_BOT_TOKEN);

  return client;
}

const notify = async () => {
  if(true) {
    console.log('Discord: send a message');
  }
}

const onReady = (client) => {
  console.log(client.user.tag + ' is running');

  const channel = client.channels.cache.get(process.env.DISCORDJS_CHANNEL_ID);

  channel.send('hi there!');
}

(async function() {
  const client = connect(onReady);
})();