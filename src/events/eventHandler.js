const StartupEvent = require('./bot/startup');

class EventHandler {
    constructor(client) {
        this.client = client;
        this.setupEvents();
    }

    setupEvents() {
        this.client.once('ready', async () => {
            await new StartupEvent(this.client).run();
        });
    }
}

module.exports = EventHandler;
