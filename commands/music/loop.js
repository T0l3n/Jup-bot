const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "loop",
    aliases: ["repeat"],
    description: "repetir la canción que se está reproduciendo actualmente.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        if (!args || args === `disable` || `0`) {
            queue.setRepeatMode(0)
            const disable = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**el loop ah sido desactivado**`)

            message.reply({ embeds: [disable] });

        } else if (args[0] === `song` || `1`) {
            queue.setRepeatMode(1);
            const song = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**la canción ahora está habilitada**`)

            message.reply({ embeds: [song] });

        } else if (args[0] === `queue` || `2`) {
            queue.setRepeatMode(2)
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**el loop queue esta habilitado**`)

            message.reply({ embeds: [embed] });

        } else message.reply({
            embeds: [new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**Escoger entre (loop song - loop queue - loop disable)**`)]
        })
    }
}