const { EmbedBuilder } = require("discord.js");

module.exports = async (client, channel, error) => {
    client.logger.error(`Something went wrong with the player **[${error}]**`, { label: `playerError` })
    if (channel) {
        channel.send({
            embeds: [new EmbedBuilder()
                .setDescription(`Algo salió mal, el problema ha sido informado a los desarrolladores, **Gracias por entender**`)
                .setColor(client.config.embed.color)
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })]
        })
    }
}