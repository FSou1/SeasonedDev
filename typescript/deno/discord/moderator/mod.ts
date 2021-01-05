import { Client, Intents, Message } from "./deps.ts";
import { capitalsExceeded, hasBlacklistedWords } from "./filters.ts";

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}!`);
});

client.on("messageCreate", (msg: Message): void => {
  const content = msg.content;

  if (hasBlacklistedWords(content)) {
    msg.reply("You message has been removed. Reason: bad words.");
    msg.delete();
  }

  if (capitalsExceeded(content, 0.5)) {
    msg.reply("You message has been removed. Reason: caps lock.");
    msg.delete();
  }
});

const token = Deno.env.get("BOT_TOKEN");

client.connect(token, Intents.None);
