const Discord = require("discord.js")
var cron = require('node-cron')
const app = new Discord.Client();

var scan = [];

if (process.env.NODE_ENV !== 'production') {
    console.log("Starting in test mode");
    require('dotenv').config();
}

app.on("ready", () => {
    const servers =  app.guilds.cache.size;
    console.log("Bot active - Servers: " + servers);
    app.user.setActivity('Looking for malicious spammers..', { type: "PLAYING"})

    //init array to filter

    //Auto DDOS links
    scan.push("crazy.rip"); 
    scan.push("nick.sbs/lol");
    
    //token logger links
    scan.push("dlscord-app.net"); 
    scan.push("discord-gifte.com"); 
    scan.push("discordnitro.fun"); 
    scan.push("discordc.gift"); 
    scan.push("doscrd.gift"); 
    scan.push("dlscord.world"); 
    scan.push("discord-airdrop.com"); 
    scan.push("discordc.gift"); 

    //todo: fake steamcommunity phishes:


  });

app.on("message", async msg => {
    if (msg.channel.type == "dm") return; //ignore direct messages
    const body = msg.content.toLowerCase();

    scan.forEach( i => {
        if(body.includes(i)){
            msg.delete();
            msg.channel.send("Malicious link automatically removed. Warned user: " + msg.member.user.tag);
            //msg.member.ban({reason: "[ Automatic ban ] Spreading malicious scam/phishing links"}).catch(error => msg.reply(error));
            return;
        }
    })

})

app.login(process.env.DTOKEN)