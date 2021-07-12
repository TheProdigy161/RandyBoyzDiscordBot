class CommandListStore {
    static commands = [];

    static tryAddToStore(command) {
        if (CommandListStore.commands.some(x => x.commandName == command.commandName))
            return;

            CommandListStore.commands.push(command);
    }

    static sortCommandNames() {
        CommandListStore.commands.sort((a, b) => {
            if (a.commandName < b.commandName) {
                return -1;
            }

            if (a.commandName > b.commandName) {
                return 1;
            }

            return 0;
        });
    }
}

module.exports = CommandListStore;
