const CommandListStore = require('./commandListStore');

class CommandBase {
    constructor(commandName, commandDescription, message = null) {
        this.message = message;
        this.commandName = commandName;
        this.commandDescription = commandDescription;

        CommandListStore.tryAddToStore(this);
    }

    // Runs the command.
    run(commandFunction = null) {
        if (this.message.content != `!${this.commandName}`)
            return;

        if (commandFunction != null)
            commandFunction();

        console.log(`Successfully ran "!${this.commandName}" command.`);
    }
}

module.exports = CommandBase;
