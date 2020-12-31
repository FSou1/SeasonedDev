import { Bot } from "./deps.ts";

import { getShibe } from "./shibes_api.ts";

const token = Deno.env.get("BOT_TOKEN") as string;

const bot = new Bot(token);

bot.on("text", async (ctx) => {
  const text = ctx.message?.text;

  if (text === "/shibe") {
    await ctx.reply(await getShibe());
  }
});

bot.launch();
