const { EmbedBuilder } = require("discord.js");
const { databasing } = require("../../structures/functions");

module.exports = async (client, guild) => {
    if (!guild || !guild.available) return;
    let guildOwner = "No owner data fetched";
    await guild.fetchOwner().then(({
        user
    }) => {
        guildOwner = user;
    }).catch((error) => { client.logger.silly(`Error on fetching guild owner [${error}]`, { label: `guildCreate` }) })

    databasing(client, guild.id)

    if (guild.systemChannel) {
        guild.systemChannel.send({
            embeds: [new EmbedBuilder()
                .setTitle(`Gracias por invitarme a su servidor.! :blush: `)
                .setColor(client.config.embed.color)
                .setDescription(`Hola a todos, soy ${client.user.username} Puedo reproducir canciones de **(Youtube - SoundCloud - Spotify)**`)
                .addFields([{ name: `Más información...`, value: `**mi prefix es: ${client.config.prefix}**, Si tiene algún problema o sugerencia, puede unirse a nuestro [Support Server](${client.config.support_server})` },
                { name: `Tip`, value: `para controlarme por completo, puede iniciar sesión en mi dashboard [here](${client.config.dashboard.domain}/guild/${guild.id})` }])
                .setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
            ]
        })
    }
    client.logger.info(`Me he unido a un nuevo servidor. **Server Name: ${guild.name}, Server Id: ${guild.id}, Member count: ${guild.memberCount}, Owner: ${guildOwner}, Owner Id: ${guildOwner.id}**`, { label: `guildCreate`})
}