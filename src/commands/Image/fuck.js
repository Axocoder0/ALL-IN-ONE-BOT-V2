const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");
//const { Random } = require("something-random-on-discord");

module.exports = {
    name: "fuck",
    category: "Image",
    aliases: ["sex"],
    description: "",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      const fuckss = ["https://cdn.discordapp.com/attachments/816742790998261771/1072955462460379226/holding-hands-couple.gif",
    "https://cdn.discordapp.com/attachments/816742790998261771/1073061690658259014/love-holding-hands.gif",
    "https://cdn.discordapp.com/attachments/816742790998261771/1072952021495324773/hand-kiss-romantic.gif",    
    "https://cdn.discordapp.com/attachments/816742790998261771/1072952942707093675/love-sex.gif",
    "https://cdn.discordapp.com/attachments/816742790998261771/1072952942967132271/sex-love.gif"]
    
  const fuckRandom = Math.floor(Math.random()* fuckss.length) 
    const taggedUser = message.mentions.members.first();
        if (!taggedUser) {
            return message.channel.send('Please mention somebody to fuck!');
        }
    let embed = new EmbedBuilder()
    .setImage(`${fuckss[fuckRandom]}`)
    .setColor("#2f3136")
    .setDescription(`${message.author.username} fucks ${taggedUser}`)
    .setFooter({text: "Requested by "+ message.author.username, iconURL:  message.author.displayAvatarURL({dynamic: true})})
    
    message.channel.send({embeds: [embed]})
                         }
};
