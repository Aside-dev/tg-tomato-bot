const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf(process.env.TG_BOT_TOKEN);

bot.start((ctx) => {
    return ctx.reply(`Привет ${ctx.message.from.first_name}, я помогу тебе сфокусироваться в работе`);
});

bot.launch();
