const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "dashboard",
    cooldown: 5,
    category: "info",
    description: "Envía un enlace del Dashboard",
    checkers: {
        vc: false,
        queue: false,
        sVc: false,
        dj: false,
    },
    run: async (client, message) => {
        try {
            message.reply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(client.config.embed.color)
                        .setDescription(`> **Website:** ${client.config.dashboard.domain}/\n\n> **Dashboard:** ${client.config.dashboard.domain}/guild/${message.guildId}\n\n>`)
                ]
            });
        } catch (e) {
            client.logger.error(`Algo salió mal ${e}`, { use: `dashboard command` });
        }
    }
}