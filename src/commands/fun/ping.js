const CommandBase = require('../base/commandBase');
const commandName = 'ping';

class PingCommand extends CommandBase {
    constructor(message) {
        super(message, commandName);
        this.run(() => {
            this.message.channel.send('Pong!');
        });
    }
}

module.exports = PingCommand;
