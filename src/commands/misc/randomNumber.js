const CommandBase = require('../base/commandBase');
const commandName = 'rand';
const commandDescription = 'Generates a random number between the two values provided. Default 1 - 100.';

class RandomNumberCommand extends CommandBase {
    constructor(message) {
        super(commandName, commandDescription, message, ',');

        this.run((params) => {
            if (params.length > 0 && params.some(x => isNaN(parseInt(x)))) {
                this.message.channel.send('Please provide two numbers');
                return;
            } else {
                params = [1, 100];
            }

            const randomNumber = Math.floor(Math.random() * params[1]) + parseInt(params[0]);
            this.message.channel.send(randomNumber);
        });
    }
}

module.exports = RandomNumberCommand;