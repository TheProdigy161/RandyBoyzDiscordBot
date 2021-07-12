const CommandListStore = require('./commandListStore');

class CommandBase {
    constructor(commandName, commandDescription, message, paramDelimiter = null) {
        this.message = message;
        this.commandName = commandName;
        this.commandDescription = commandDescription;

        this.paramDelimiter = paramDelimiter;
        this.params = [];

        CommandListStore.tryAddToStore(this);
    }

    // Runs the command.
    run(commandFunction = null) {
        if (!this.message.content.startsWith(`!${this.commandName}`))
            return;

        if (this.paramDelimiter != null) {
            const paramString = this.message.content.replace(`!${this.commandName}`, '').replace(/\s/g, '');
            if (paramString)
                this.params = paramString.split(this.paramDelimiter);
        }

        if (commandFunction != null)
            commandFunction(this.params);

        console.log(`Successfully ran "!${this.commandName}" command.`);
    }
}

module.exports = CommandBase;
