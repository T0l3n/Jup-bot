const { EmbedBuilder } = require("discord.js");

module.exports = (client, queue) => {
    if (queue.textChannel) {
        queue.textChannel.send({
            embeds: [new EmbedBuilder()
                .setDescription(`No encontré nada relacionado con la última canción.`)
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })]
        })
    }
}