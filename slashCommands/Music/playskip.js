const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "playskip",
    description: "Reproduce una canción del link.",
    category: "music",
    checkers: {
        vc: true,
        queue: false,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        const string = args.join(" ");
        if (!string) {
            return message.channel.send(new EmbedBuilder()
                .setDescription(`Proporcione un nombre de canción o link.`)
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon }));
        }

        const options = {
            member: message.member,
            textChannel: message.channel,
            message,
            skip: true
        }

        await client.distube.play(message.member.voice.channel, string, options).catch(err => {
            message.reply({
                embeds: [new EmbedBuilder()
                    .setDescription(err.message)
                    .setColor(client.config.embed.color)
                    .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })]
            });
        });
    }
}