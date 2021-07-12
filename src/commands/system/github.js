const CommandBase = require('../base/commandBase');

const commandName = 'github';
const commandDescription = 'Links the github of the bot.';

class GithubCommand extends CommandBase {
    constructor(message) {
        super(commandName, commandDescription, message);

        this.run(() => {
            this.message.channel.send('https://github.com/TheProdigy161/RandyBoyzDiscordBot');
        });
    }
}

module.exports = GithubCommand;
