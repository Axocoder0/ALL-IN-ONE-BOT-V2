const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder } = require("discord.js");
const config = require('../../config');

module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h"],
    description: "",
    args: false,
    usage: "",
    userPerms: [],
    owner: false,
    execute: async (message, args, client, prefix) => {

        let embeds = [
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setDescription(`<a:x_dot:1247589958600888332> Prefix on this server : \`${prefix}\`\n<a:x_dot:1247589958600888332> Type **\`${prefix}\`help** for more info\n<a:x_dot:1247589958600888332> Total commands: \`${client.commands.size}\`\n**[Invite Me](${config.links.invite}) | [Support HQ](${config.links.support})**`).addFields([{ name: `**__Main Categories__**`, value: `**<:x_automod:1247589330768101478> Moderation\n<:x_info:1247940212999458899> Information\n<:x_music:1247940471364255794> Music\n<:x_headpone:1247939714460422259> Filters\n<:x_gift:1247590129921556520> Giveaway\n<:x_lol:1247940299460837418> Fun\n<:x_galaxy:1247939840838860932> Image\n<:x_mic:1247940411776045247> Voice\n<:x_setting:1247940814613778454> Settings\n<:x_18:1247589037619941435> Nsfw\n<:x_owner:1247940594198642709> Custom Roles\n\n**__Links__**\n [Support](https://discord.gg/codersplanet) | [Invite](${config.links.invite}) ** ` }]).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp().setImage("https://cdn.discordapp.com/attachments/1247444478713659421/1254450677829341357/standard_1.gif?ex=667989bc&is=6678383c&hm=631c69dcefcfb483866348a723f440cba5a87622aad1359b6aa70e3d23ad2241&"),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Moderation \`[17]\`**").setDescription(`\n\n\`lock, unlock, lockall, unlockall, hide, unhide, hideall, unhideall, ban, unban, unbanall, kick, mute, unmute, purge, nuke, purgebots\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Information \`[20]\`**").setDescription(`\n\n\`about, invite, ping, node, stats, help, avatar, banner, servericon, serverbanner, userinfo, serverinfo, uptime, firstmsg, roleinfo, profile, membercount, bug, announce, embedsay\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Music \`[30]\`**").setDescription(`\n\n\`play, join, leave, loop, Autoplay, pause, lyrics, nowplaying, previous, queue, resume, skip, remove, seek, volume, search, shuffle, grab, skipto, clearqueue, 247, filters, p_create, p_delete, p_savecurrent, p_savequeue, p_removetrack, p_load, p_info, p_list\`\n\n`).setTimestamp().setThumbnail(client.user.displayAvatarURL()),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Giveaway \`[4]\`**").setDescription(`\n\n\`gstart, greroll, gend, glist\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Fun \`[6]\`**").setDescription(`\n\n\`hack, meme, ascii, math, howgay, howdumb\`\n\n`).setColor(client.color).setThumbnail(client.user.displayAvatarURL()).setTimestamp(),
            new EmbedBuilder().setColor(client.color).setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Image \`[13]\`**").setDescription(`\n\n\`achi, kiss, hug, fuck, slap, cat, dog, meeting, pat, ego, punch, waifu, cry\`\n\n`).setTimestamp().setThumbnail(client.user.displayAvatarURL()),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Voice \`[6]\`**").setDescription(`\n\n\`vcdeafen, vcundeafen, vclist, vcmute, vcunmute, vckick\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Settings \`[4]\`**").setDescription(`\n\n\`adddj, removedj, toggledj, prefix\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Nsfw \`[23]\`**").setDescription(`\n\n\`aass, abdsm, ablowjob, acum, adoujin, afeet, afemdom, afoxgirl, agif, aglasses, ahentai, amaid, amasturbation, anetorare, apanties, aorgy, apussy, aschool, asuccubus, atentacles, auniform, athighs, ayuri\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),
            new EmbedBuilder().setAuthor({ name: `Help Panel`, iconURL: client.user.displayAvatarURL() }).setTitle("**Custom Roles \`[11]\`**").setDescription(`\n\n\`rsetup, girl, friend, guest, official, vip, rvip, rgirl, rfriend, rofficial, rguest\`\n\n`).setThumbnail(client.user.displayAvatarURL()).setColor(client.color).setTimestamp(),

        ];
        await pagination(message, embeds);

    }
}

/**
 *
 * @param {CommandInteraction} interaction
 * @param {Array} embeds
 */
async function pagination(interaction, embeds) {
    
    let row = new ActionRowBuilder().addComponents([
        new StringSelectMenuBuilder()
            .setCustomId('helpop')
            .setPlaceholder('🕊️ | Click to Browse Commands!')
            .addOptions([
                {
                    label: 'Home',
                    value: 'fifth',
                    emoji: '<:x_home:1247939943133876416>',
                    description: 'Go Back To The Home Page'
                },
                {
                    label: 'Moderation',
                    value: 'sixth',
                    emoji: '<:x_automod:1247589330768101478>',
                    description: 'Get All Moderation Commands List'
                },
                {
                    label: 'Information',
                    value: 'first',
                    emoji: '<:x_info:1247940212999458899>',
                    description: 'Get All Information Commands List'
                },
                {
                    label: 'Music',
                    value: 'second',
                    emoji: '<:x_music:1247940471364255794>',
                    description: 'Get All Music Commands List'
                },
                {
                    label: 'Giveaway',
                    value: 'tenth',
                    emoji: '<:x_gift:1247590129921556520>',
                    description: 'Get All Giveaway Commands List'
                },
                {
                    label: 'Fun',
                    value: 'eight',
                    emoji: '<:x_lol:1247940299460837418>',
                    description: 'Get All Fun Commands List'
                },
                {
                    label: 'Image',
                    value: 'seven',
                    emoji: '<:x_galaxy:1247939840838860932>',
                    description: 'Get All Image Commands List'
                },
                {
                    label: 'Voice',
                    value: 'eleventh',
                    emoji: '<:x_mic:1247940411776045247>',
                    description: 'Get All Voice Commands List'
                },
                {
                    label: 'Settings',
                    value: 'fourth',
                    emoji: '<:x_setting:1247940814613778454>',
                    description: 'Get All Setting Commands List'
                },
                {
                    label: 'Nsfw',
                    value: 'xdnsfw',
                    emoji: '<:x_18:1247589037619941435>',
                    description: 'Get All Nsfw Commands List'
                },
                {
                    label: 'Custom Roles',
                    value: 'nineth',
                    emoji: '<:x_owner:1247940594198642709>',
                    description: 'Get All Custom Roles Commands List'
                },
                {
                    label: 'Owner',
                    value: 'owner',
                    emoji: '<:x_owner:1247940594198642709>',
                    description: 'Get All Owner Commands List'
                },
            ])
    ]);
    let row2 = new ActionRowBuilder()
        .addComponents([
            new ButtonBuilder()
                .setLabel("Invite Me")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<a:x_dot:1247589958600888332>")
                .setURL(config.links.invite),
            new ButtonBuilder()
                .setLabel("Support Server")
                .setStyle(ButtonStyle.Link)
                .setEmoji("<a:x_dot:1247589958600888332>")
                .setURL(config.links.support),
        ])
    let curPage = 0;
    await interaction.reply({ embeds: [embeds[curPage]], components: [row, row2] }).then(async (msg) => {
        const filter = (i) => i.user.id === interaction.user.id;
        const collector = msg.createMessageComponentCollector({
            filter,
            componentType: 'SELECT_MENU',
            time: 60000
        });
        collector.on('collect', async (i) => {
            switch (i.values[0]) {
                case 'first':
                    curPage = 1
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'second':
                    curPage = 2
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'third':
                    curPage = 3
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'fourth':
                    curPage = 4
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'fifth':
                    curPage = 0
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'sixth':
                    curPage = 5
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'seventh':
                    curPage = 6
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'eight':
                    curPage = 7
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'nineth':
                    curPage = 8
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'tenth':
                    curPage = 9
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'eleventh':
                    curPage = 10
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'xdnsfw':
                    curPage = 11
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
                case 'owner':
                    curPage = 12
                    await i.deferUpdate();
                    await i.editReply({ embeds: [embeds[curPage]], components: [row, row2] });
                    break;
            }
        });
        collector.on('end', async (i) => {
            await msg.edit({ embeds: [embeds[curPage]], components: [] });
        });
    });
}
            