
const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : Robben');
console.log('ready');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: '•●{رَمِضّاِنُ كـــًرًيَـــمً ~☾',
     url: 'http://twitch.tv/M7md_Salih',
    application_id: '394600839496466443',
     assets: {
        small_image: 444859352093032449,
        small_text: '2018',
        large_image: 444864778465181706,

  }
    });
});



client.login(process.env.BOT_TOKEN); 
