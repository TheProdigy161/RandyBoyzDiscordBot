class CommandBase {
    constructor(message, command) {
        this.message = message;
        this.command = command;
    }

    // Runs the command.
    run(commandFunction = null) {
        if (this.message.content != `!${this.command}`)
            return;

        if (commandFunction != null)
            commandFunction();

        console.log(`Successfully ran "!${this.command}" command.`);
    }
}

module.exports = CommandBase;
