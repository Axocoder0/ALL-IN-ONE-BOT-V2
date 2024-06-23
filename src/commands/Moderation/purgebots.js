const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    name: "purgebots",
    category: "Moderation",
    aliases: ["clearbots", "c bots"],
    description: "to dlt bot messages",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
      
    if (!message.member.permissions.has('ManageMessages')) {
      return message.reply({embeds: [new EmbedBuilder().setColor(client.color).setDescription(`${client.emoji.cross} | You must have \`Manage Messages\` permissions to use this command.`)]})
    }
    if (!message.guild.members.me.permissions.has(['ManageMessages', 'ReadMessageHistory'])) {
      return message.reply({embeds: [new EmbedBuilder().setColor(client.color).setDescription(`${client.emoji.cross} | I must have \`Manage Messages\`, \`Read Message History\` permissions to use this command.`)]})
    }
    const embed = new EmbedBuilder()
    .setColor(client.color);
    const amount = args[0] || 99;
    if(amount > 99){
      return message.reply({embeds: [new EmbedBuilder().setColor(client.color).setDescription(`${client.emoji.cross} | Maximum **99** bot messages can be purged at a time.`)]})
    }
    
    const response = await client.util.purgeMessages(message.member, message.channel, "BOT", amount);
    if (typeof response === "number") {
      return message.channel.send({embeds: [embed.setDescription(`${client.emoji.tick} | Successfully deleted ${response} bot messages.`)]})
    } else if (response === "BOT_PERM") {
      return message.reply({embeds: [embed.setDescription(`${client.emoji.cross} | I must have \`Manage Messages\`, \`Read Message History\` permissions to use this command.`)]})
    } else if (response === "MEMBER_PERM") {
      return message.reply({embeds: [embed.setDescription(`${client.emoji.cross} | You must have \`Manage Messages\` permissions to use this command.`)]})
    } else if (response === "NO_MESSAGES") {
      return message.reply({embeds: [embed.setDescription(`${client.emoji.cross} | There were no bots messages to purge.`)]})
    } else {
      return message.reply({embeds: [embed.setDescription(`${client.emoji.cross} | I was unable to delete the messages`)]})
    }
  }
 }


