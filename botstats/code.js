const discord = require('discord.js')
const client = new discord.Client()
var cpuStat = require('cpu-stat');
const si = require('systeminformation');
const os = require('os');
const ms = require('ms');
var osutils = require('os-utils');

    var avgClockMHzCore2 = cpuStat.clockMHz(2);
    var totalCores = cpuStat.totalCores();
    var platform = os.platform();
    var uptime = os.uptime();
    var totalmem = osutils.totalmem();
    let totalRam = totalmem/1024; // Converting it to GB
    let usedRam = (process.memoryUsage().heapUsed/1024/1024).toFixed();//converted this to MB
    let freeMemCalculate = (usedRam/1024).toFixed(2); //calculating Free Ram in GB
    let freeRam = totalRam - freeMemCalculate;

    client.on('message', message => {

        if(message.content === 'stats'){

    cpuStat.usagePercent(function(err,percent,seconds){
      if(err){
        return console.log(err);
      }
      si.cpu(function(data){

        let embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("BOT AND HOSTING STATS")
        /* Now From Here you can use all the above */

        .addField("**GENERAL**","**Client : **" + `${client.user.tag}` + " (" + `${client.user.id}` + ")" + "\n**Servers : **" + "`" + `${client.guilds.cache.size}` + "`" + "\n**Users : **" + "`" + `${client.users.cache.size}` + "`" + "\n**Channels : **" + "`" + `${client.channels.cache.size}` + "`" + "\n**Creation Date : **" + "`" + client.user.createdAt.toDateString() + " 15:32:38`" + "\n**Node.js : **" + "`" + process.version + "`" + "\n**Discod.js : **" + "`" + "v12.2.0" + "`",false)
        //This is optional you can get it and write own
         .addField("**SYSTEM INFORMATION**","**Platform :**" + "`" + platform + "`" + "\n **Uptime :**" + "`" + ms(client.uptime, { long: true }) + "`" + "**\nCPU :\n**"  + "`" + os.cpus()[0].model  + "`",true)
         //This will give all system INFORMATION
         .addField("**RAM INFORMATION**","**Total Ram : **" + "`" + totalRam.toFixed(2) + "` **GB**" + "\n**Used Ram : **" + "`" + usedRam + "` **MB**" +  "\n**Free Ram : **" + "`" + freeRam.toFixed(2) + "` **GB**", true)
         //We have used .toFixed(2) to reduce decimal Values
         .addField("**CPU INFORMATION**","**- Manufucturer:** " + "`" + data.manufacturer +  "`" + " \n **- Brand:** " + "`"  + data.brand + "`" + "\n **- Speed:** " + "`" + data.speed + "`" + " **GHz**" + "\n **- Cores:** " + "`" + data.cores + "`" + "\n**- Physical cores:** " + "`" + data.physicalCores + "`" + "\n **- CPU Usage: **" + "`" + percent.toFixed(2) + "`" + " **%**" + "\n **- AVG Clock: **" + "`" + avgClockMHzCore2 + "`" + " **MHz**", true)

         message.channel.send(embed);
      })
    })
   }
});
