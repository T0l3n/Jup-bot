module.exports = client => {
    client.logger.error(`[${client.user.username}] || Desconectado en ${new Date()}.`, { label: `Client Disconnect`});
}