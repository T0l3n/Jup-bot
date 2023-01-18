const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "skip",
    aliases: ["s"],
    description: "Salta la canción actual.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        queue.skip().then(song => {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription("**Se ha saltado la canción**")

            message.reply({ embeds: [embed] });
        });
    }
}