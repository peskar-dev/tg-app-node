import 'dotenv/config';

import { Telegraf, Markup } from "telegraf";

const tokenEnv = process.env.TOKEN;
const token = tokenEnv;

const bot = new Telegraf(token);
const webAppUrl = "https://egeway-front.peskar.tech/";

bot.start((ctx) =>
  ctx.reply(
    "Welcome",
    Markup.keyboard([Markup.button.webApp("Web App", webAppUrl)]),
  ),
);

bot.launch();
