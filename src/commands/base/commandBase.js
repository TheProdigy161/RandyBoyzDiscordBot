const CommandListStore = require('./commandListStore');

class CommandBase {
    constructor(commandName, commandDescription, paramDelimiter = ',') {
        this.commandName = commandName;
        this.commandDescription = commandDescription;

        this.paramDelimiter = paramDelimiter;
        this.params = [];

        CommandListStore.tryAddToStore(this);
    }

    isMatch(message) {
        this.message = message;
        return this.message.content.startsWith(`!${this.commandName}`)
    }

    // Runs the command.
    run(commandFunction = null) {
        if (this.paramDelimiter != null) {
            const paramString = this.message.content.replace(`!${this.commandName}`, '').replace(/\s+/g, ' ').trim();
            if (paramString.includes(this.paramDelimiter))
                this.params = paramString.split(this.paramDelimiter);
            else if (paramString.includes(' '))
                this.params = paramString.split(' ');
        }

        if (commandFunction != null)
            commandFunction(this.params);

        console.log(`Successfully ran "!${this.commandName}" command.`);
    }
}

module.exports = CommandBase;
