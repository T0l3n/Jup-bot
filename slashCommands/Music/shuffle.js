const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "shuffle",
    aliases: ["mix"],
    description: "Mezcla la cola actual.",
    category: "music",
    checkers: {
        vc: true,
        queue: true,
        sVc: true,
        dj: true,
    },

    run: async (client, message, args, prefix, queue) => {

        await queue.shuffle();
        let embed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
            .setDescription(`**La canción ha sido mezclada**`);

        message.reply({ embeds: [embed] });
    }
}