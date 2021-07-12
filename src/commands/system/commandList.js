const CommandBase = require('../base/commandBase');
const { MessageEmbed } = require('discord.js');
const CommandListStore = require('../base/commandListStore');

const commandName = 'commands';
const commandDescription = 'Lists all available commands.';

class CommandListCommand extends CommandBase {
    constructor(message = null) {
        super(commandName, commandDescription, message);

        this.run(() => {
            const embeddedMessage = new MessageEmbed();
            embeddedMessage.setTitle('Command List:');
            
            // Setup command list.
            let description = '';

            CommandListStore.sortCommandNames();
            CommandListStore.commands.forEach((command, index) => {
                description += `**!${command.commandName}** - ${command.commandDescription}`;

                if (index != CommandListStore.commands.length - 1)
                    description += '\n';
            });
            
            embeddedMessage.setDescription(description);
            this.message.channel.send(embeddedMessage);
        });
    }
}

module.exports = CommandListCommand;
