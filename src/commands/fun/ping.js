const CommandBase = require('../base/commandBase');

const commandName = 'ping';
const commandDescription = 'Replies with the message "Pong!".';

class PingCommand extends CommandBase {
    constructor(message) {
        super(commandName, commandDescription, message);

        this.run(() => {
            this.message.channel.send('Pong!');
        });
    }
}

module.exports = PingCommand;
