class CommandBase {
    // Runs the command.
    run(message, command, commandFunction = null) {
        
        if (message.content != `!${command}`)
            return;

        if (commandFunction != null)
            commandFunction();

        console.log(`Successfully ran "!${command}" command.`);
    }
}

module.exports = CommandBase;
