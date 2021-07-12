const CommandBase = require('../base/commandBase');
const { MessageEmbed } = require('discord.js');
const commandName = 'commands';

class CommandListCommand extends CommandBase {
    constructor(message = null) {
        super(message, commandName);

        this.run(() => {
            const embeddedMessage = new MessageEmbed();
            embeddedMessage.setTitle('Command List:');
            embeddedMessage.description =
                '**!commands** - Lists all available commands.\n';
            embeddedMessage.description +=
                '**!ping** - Replies with the message "Pong!".';

            this.message.channel.send(embeddedMessage);
        });
    }
}

module.exports = CommandListCommand;
