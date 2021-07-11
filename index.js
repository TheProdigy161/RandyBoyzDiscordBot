const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('ODYyNzk1NzAwMzk4OTgxMTIx.YOdjHA.aazQyYXKW0PH4foGw4seOkDTba0');
