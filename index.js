const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
const lib = require("./lib/functions");

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

lib.setup(bot);

module.exports.bot = bot;

bot.login(NjA1MTA5NTcyNzc1OTY4NzY4.XXexGg.kU4XtHzNnyKiWr6GfVrTzKcgLfo);
