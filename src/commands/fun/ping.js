const CommandBase = require('../base/commandBase');

class Ping extends CommandBase {
  // Initialise command
  // Run command
  // Log command

  constructor(message) {
    super();
    this.run(message, 'ping', () => {
        message.channel.send('Pong!');
    });
  }
}

module.exports = Ping;
