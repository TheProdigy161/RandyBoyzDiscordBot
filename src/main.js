const Discord = require('discord.js');
const discordClient = new Discord.Client();
const CommandHandler = require('./commands/commandHandler.js');
const EventHandler = require('./events/eventHandler.js');

discordClient.login(process.env.RANDY_BOYZ_DISCORD_BOT_TOKEN).then(() => {
    this.EventHandler = new EventHandler(discordClient);
    this.CommandHandler = new CommandHandler(discordClient);
});
