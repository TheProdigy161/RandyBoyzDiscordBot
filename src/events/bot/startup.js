class StartupEvent {
    constructor(client) {
        this.client = client;
    }

    async run() {
        // Get the bot channel.
        let botChannel = this.client.channels.cache.find(channel => channel.name.toUpperCase() == 'BOT-SHIT');
        
        if (botChannel == null) {
            // Get the text channel category.
            const categoryChannel = this.client.channels.cache.find(channel => channel.name.toUpperCase() == 'TEXT CHANNELS' && channel.type.toUpperCase() == 'CATEGORY');

            // Get first server added to.
            const guildId = this.client.guilds.cache.firstKey();
            const guild = this.client.guilds.cache.get(guildId);

            // Create new bot.
            botChannel = await guild.channels.create('bot-shit', {
                reason: 'Channel needed for bot messages.',
                parent: categoryChannel,
            });
        }
        
        botChannel.send('Discord bot online.');
        console.log('Ready!');
    }
}

module.exports = StartupEvent;