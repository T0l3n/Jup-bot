const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "previous",
    aliases: ["prev"],
    description: "Reproduce la canción anterior en el queue.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        if (queue.previousSongs.length == 0) {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription("**There are no previous songs**")
            message.reply({ embeds: [embed] });
        } else {
            await queue.previous().then(song => {
                const embed = new EmbedBuilder()
                    .setColor(client.config.embed.color)
                    .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                    .setDescription(`**La canción ha sido previa**`)

                message.reply({ embeds: [embed] });
            });
        }
    }
}