const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "pause",
    aliases: ["pa"],
    description: "Pausa la canción actual.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: false,
    },

    run: async (client, message, args, prefix, queue) => {

        if (queue.paused) {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`\`⏯\` | **La canción ha sido:** \`Paused\``);

            message.reply({ embeds: [embed] });
        } else {
            queue.pause();
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`\`⏯\` | **La canción ha sido:** \`Paused\``);

            message.reply({ embeds: [embed] });
        }
    }
}