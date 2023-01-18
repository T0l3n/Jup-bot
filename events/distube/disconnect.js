const { EmbedBuilder } = require("discord.js");

module.exports = (client, queue) => {

    if (queue.textChannel) {
        queue.textChannel.send({
            embeds: [new EmbedBuilder()
                .setTitle(`No es el final estoy seguro`)
                .setDescription(`Me desconecté de <#${queue.voice.voiceState.channelId}> y eliminé la cola :()`)
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })]
        })
    }
}