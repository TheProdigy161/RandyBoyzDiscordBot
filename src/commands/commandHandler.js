const PingCommand = require('./fun/ping.js');
const RandomNumberCommand = require('./misc/randomNumber.js');
const CommandListCommand = require('./system/commandList.js');
const GithubCommand = require('./system/github.js');

class CommandHandler {
    constructor(client) {
        this.client = client;
        this.setupCommands();
        this.setupClient();
    }
    
    setupCommands() {
        this.pingCommand = new PingCommand();
        this.githubCommand = new GithubCommand();
        this.randomNumberCommand = new RandomNumberCommand();
        this.commandListCommand = new CommandListCommand();
    }

    // Setup all commands for the bot.
    setupClient() {
        this.client.on('message', (message) => {
            if (this.pingCommand.isMatch(message))
                this.pingCommand.execute();
            else if (this.githubCommand.isMatch(message))
                this.githubCommand.execute();
            else if (this.randomNumberCommand.isMatch(message))
                this.randomNumberCommand.execute();
            else if (this.commandListCommand.isMatch(message))
                this.commandListCommand.execute();
        });
    }
}

module.exports = CommandHandler;
