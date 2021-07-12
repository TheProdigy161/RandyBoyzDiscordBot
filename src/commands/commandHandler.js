const PingCommand = require('./fun/ping.js');
const CommandListCommand = require('./system/commandList.js');
const GithubCommand = require('./system/github.js');

class CommandHandler {
    constructor(client) {
        this.client = client;
        this.setupCommands();
    }
    
    // Setup all commands for the bot.
    setupCommands() {
        this.client.on('message', (message) => {
            new PingCommand(message);
            new GithubCommand(message);
            new CommandListCommand(message);
        });
    }
}

module.exports = CommandHandler;
