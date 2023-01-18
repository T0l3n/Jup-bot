const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue) => {
    if (queue.textChannel) {
        const embed = new EmbedBuilder()
            .setDescription(`la cola ahora está vacía, es hora de agregar más canciones.`)
            .setColor(client.config.embed.color)
            .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon });

        queue.textChannel.send({ embeds: [embed] })
    }
}