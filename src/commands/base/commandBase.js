class CommandBase {
    // Runs the command.
    run(message, command, commandFunction = null) {
        
        if (message.content != `!${command}`)
            return;

        if (commandFunction != null)
            commandFunction();

        console.log('Run command');
    }
}

module.exports = CommandBase;
