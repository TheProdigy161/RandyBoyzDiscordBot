const CommandBase = require('../base/commandBase');

const commandName = 'github';
const commandDescription = 'Links the github of the bot.';

class GithubCommand extends CommandBase {
    constructor() {
        super(commandName, commandDescription);
    }

    execute() {
        this.run(this.#logic());
    }

    #logic() {
        this.message.channel.send('https://github.com/TheProdigy161/RandyBoyzDiscordBot');
    }
}

module.exports = GithubCommand;
