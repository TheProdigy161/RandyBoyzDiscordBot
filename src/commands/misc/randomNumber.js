const CommandBase = require('../base/commandBase');
const commandName = 'rand';
const commandDescription = 'Generates a random number between the two values provided. Default 1 - 100.';
const maxParams = 2;

class RandomNumberCommand extends CommandBase {
    constructor() {
        super(commandName, commandDescription);
    }

    execute() {
        this.run((x) => this.#logic(x));
    }
    
    #logic(params) {
        if (params.length > 0 && params.some(x => isNaN(parseInt(x)))) {
            this.message.channel.send('Please provide two numbers');
            return;
        }
        
        if (params.length > maxParams) {
            this.message.channel.send(`Too many parameters provided. Only ${maxParams} parameters required.`);
            return;
        } else if (params.length == 0) {
            params = [1, 100];
        }

        const randomNumber = Math.floor(Math.random() * params[1]) + parseInt(params[0]);
        this.message.channel.send(randomNumber); 
    }
}

module.exports = RandomNumberCommand;