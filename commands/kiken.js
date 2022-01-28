const { MessageActionRow, MessageButton } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiken')
		.setDescription('Start recording audio.')
		.addUserOption(option => option.setName('target').setDescription('Select a user')),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('stop')
					.setLabel('Stop Recording')
					.setStyle('DANGER'),
			);
		const user = interaction.options.getUser('target');
		await interaction.reply({ content: `Recording ${user}'s audio...`, components: [row], ephemeral: true });
	},
};
