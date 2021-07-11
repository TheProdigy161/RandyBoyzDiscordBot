const Discord = require('discord.js');
const discordClient = new Discord.Client();
const CommandHandler = require('./commands/commandHandler.js');

discordClient.once('ready', () => {
    console.log('Ready!');
});

discordClient.login(process.env.RANDY_BOYZ_DISCORD_BOT_TOKEN).then(() => {
    this.CommandHandler = new CommandHandler(discordClient);
});
