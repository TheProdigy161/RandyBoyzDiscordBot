const CommandBase = require('../base/commandBase');

const commandName = 'ping';
const commandDescription = 'Replies with the message "Pong!".';

class PingCommand extends CommandBase {
    constructor() {
        super(commandName, commandDescription);
    }

    execute() {
        this.run(this.#logic());
    }

    #logic() {
        this.message.channel.send('Pong!');
    }
}

module.exports = PingCommand;
