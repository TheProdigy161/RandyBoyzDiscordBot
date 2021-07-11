// const { Client } = require('discord.js');
const Ping = require('./fun/ping.js');

class CommandHandler {
    constructor(client) {
        this.client = client;
        this.setupCommands();
    }

    setupCommands() {
        this.client.on('message', (message) => {
            new Ping(message);
        });
    }
}

module.exports = CommandHandler;
