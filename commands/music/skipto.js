const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "skipto",
    aliases: ["st"],
    description: "Salta una canción en la cola.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        if (isNaN(args[0])) {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`Por favor ingrese un número valido!`);

            return message.reply({ embeds: [embed] });
        }

        await queue.jump(parseInt(args[0])).then(queue => {
            const embed = new EmbedBuilder()
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
                .setDescription(`**Skipped to ${args[0]}**`)

            message.reply({ embeds: [embed] });
        });
    }
}