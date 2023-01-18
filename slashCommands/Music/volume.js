const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "volume",
    aliases: ["vol", "v"],
    description: "Cambia el volumen de la reproducción de música..",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args) => {

        const volume = parseInt(args[0]);
        if (!volume) {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`Current **volume:** \`${queue.volume}\`%`)

            return message.reply({ embeds: [embed] });
        }

        if (isNaN(volume)) {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`Por favor ingrese un número valido`);

            return message.reply({ embeds: [embed] });
        }

        if (Number(volume) < 1 || Number(volume) > 100) return message.reply({
            embeds: [new EmbedBuilder()
                .setDescription("Please provide a number between 1 and 100")
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })]
        })

        queue.setVolume(volume);

        const embed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
            .setDescription(`**Change volume to: \`${args[0]}\`%**`)

        message.reply({ embeds: [embed] });

    }
}