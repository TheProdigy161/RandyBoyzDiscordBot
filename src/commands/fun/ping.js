const CommandBase = require('../base/commandBase');

class PingCommand extends CommandBase {
  constructor(message) {
    super();
    this.run(message, 'ping', () => {
        message.channel.send('Pong!');
    });
  }
}

module.exports = PingCommand;
