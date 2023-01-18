const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "join",
	aliases: ["summon"],
	description: "Hace que el bot se una al canal de voz.",
	category: "music",
	checkers: {
        vc: true,
        queue: false,
        sVc: false,
        dj: false,
    },

	run: async (client, message, args, prefix, queue) => {

		const clientVoice = message.guild.members.me.voice.channel;
		const memberVoice = message.member.voice.channel;

		if (clientVoice) {
			if (clientVoice !== memberVoice) {
				const embed = new EmbedBuilder()
					.setColor(client.config.embed.color)
					.setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
					.setDescription(`Debes estar en un canal de voz. <#${message.guild.members.me.voice.channelId}>`);

				return message.reply({ embeds: [embed] });
			} else {
				const embed = new EmbedBuilder()
					.setColor(client.config.embed.color)
					.setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
					.setDescription(`**ya estoy en un canal de voz**`);

				return message.reply({ embeds: [embed] });
			}
		} else {
			if (memberVoice) {
				client.distube.voices.join(memberVoice)
					.then(voice => {
						const embed = new EmbedBuilder()
							.setColor(client.config.embed.color)
							.setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
							.setDescription(`**Unido \`${memberVoice.name}\`**`)

							message.reply({ embeds: [embed] });
					})
					.catch(e => {
						console.log(e);
					})


			} else {
				const embed = new EmbedBuilder()
					.setColor(client.config.embed.color)
					.setFooter({ text: client.config.embed.footer_text, iconURL: client.config.embed.footer_icon })
					.setDescription(`**Debes estar en un canal de voz.!**`);

				return message.reply({ embeds: [embed] });
			}
		}
	}
}