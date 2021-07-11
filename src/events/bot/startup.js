class StartupEvent {
    constructor(client) {
        this.client = client;
    }

    async run() {
        let botChannel = this.client.channels.cache.find(channel => channel.name.toUpperCase() == 'BOT-SHIT');
        
        if (botChannel == null) {
            const categoryChannel = this.client.channels.cache.find(channel => channel.name.toUpperCase() == 'TEXT CHANNELS' && channel.type.toUpperCase() == 'CATEGORY');
            const guildId = this.client.guilds.cache.firstKey();
            const guild = this.client.guilds.cache.get(guildId);
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