const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "resume",
    aliases: ["re"],
    description: "reanuda la música",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: false,
    },

    run: async (client, message, args, prefix, queue) => {

        if (queue.paused) {
            await queue.resume();

            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**La canción ha sido reanudada.**`);

            message.reply({ embeds: [embed] });
        } else {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**La canción ha sido reanudada.**`);

            message.reply({ embeds: [embed] });
        }
    }
}