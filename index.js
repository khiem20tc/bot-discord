require("dotenv").config();
const discord = require('discord.js');
const play = require('./play/play');

var bot = new discord.Client();

bot.on('ready' , () => {
    console.log('bot on ' + bot.user.tag);
})

bot.on("message", play.play );

//bot.on("message" ,play.textToSpeech);


bot.login(process.env.TOKEN); 
