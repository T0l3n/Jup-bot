module.exports = {
    token: "" || process.env.token, // token of your bot, be careful to not share it with anyone https://discord.com/developers/applications
    prefix: "$", // prefix of your bot
    debug: false, // true if you want debug info logged into your console
    statcord_token: "statcord.com-tRldqOxzjwcX7YZgqouh" || process.env.statcord_token, // your statcord token, useful to give you accurate info about your bot https://statcord.com
    topgg_token: "" || process.env.topgg_token, // if your bot is listed on top.gg fill here to post stats into your bot page, leave blank if don't have it
    youtube_Cookie: "" || process.env.cookie, // needed to play age restricted songs, leave blank if you don't have it
    webhook: { // needed to log all the info you need about your bot
        id: "1065011695191326741", // id of your webhook
        token: "rnTcEMtEYPWsD-xtCaC7QwV2v1jFICYzlha_EUya5qdPrAOcZggZqVE-WHoPRIGthmf5", // token of your webhook
    },
    activityInterval: 35, //activity interval in seconds, time to change bot activity (recommended is 35 sec)
    autoResumeInterval: 5, // time in seconds to save songs in database in case of restarting the bot and autoreusming songs after restart
    antiCrash_Module: true, // to avoid bot restarts if something is wrong
    ownerId: ["691745316432773172"], // list of owner ids that should have access to secret stuff in the bot
    support_server: "https://discord.gg/NwyZMnQNG4", // a link of your support server
    support_server_id: "1043311584824533012", // id of your support server
    loadSlashsGlobal: true, // if you want to load slash commands for all guilds leave it to true
    geniusApiToken: "6hGN3GnxTcLrLSU5B2eXt2OqP7RXEpfEWtjTH1lpYf_2hXStZz8s6ByuwjbBCLjX" || process.env.geniusApiToken, // needed to get songs lyrics https://genius.com/api-clients/new
    embed: { // customize your embed
        color: "#00f7ff", // color of your embed
        footer_text: "JUP Music", // text of your footer's embed
        footer_icon: "https://media.discordapp.net/attachments/1064700931150725201/1065015424930033724/media_discordapp_net-standard-0.png", // a link to icon of your embed
    },
    spotify: { // needed to fetch songs from spotify https://developer.spotify.com/
        clientId: `` || process.env.spotifyId,
        clientSecret: `` || process.env.spotifySecret
    },
    dashboard: {
        "enabled": true, // if you don't want dashboard toggle it to false
        "license": "f519e35e-1948-4c90-99d1-f44e1263b1de" || process.env.license, // licence from https://assistantscenter.com/licenses/opensource
        "port": 80, // open port for the dashboard
        "domain": "https://dash.klbotmusic.ml", // http://your.domain
        "redirectUri": "https://dash.klbotmusic.ml/discord/callback", // redirect uri should be http://your.domain/discord/callback
        "clientId": "1065009739752292373" || process.env.clientId, // you bot client id https://discord.com/developers/applications
        "clientSecret": "0EpDfbGgCYYLVCJoDpbVVPaI6ox4OJfR" || process.env.clientSecret, // https://discord.com/developers/applications
        "updateFeeds": 20, //update feeds every 20 second, the faster update intervals the more resource being used
        "events": {
            "userLoggedIn": false, // if you want to get informed about who logged into your dashboard
            "websiteView": false, // if you want to get informed about who viewed your dashboard
            "guildSettingsUpdated": false // if you want to get informed about who updated settings in your dashboard
        },
        "usersJoining": false, // if you want users who log into your dashboard join your support server leave it to true
        "imageFavicon": "https://media.discordapp.net/attachments/988223337555701760/1065056312297275432/static.png?width=832&height=468", // favicon link for dashboard
        "iconURL": "https://media.discordapp.net/attachments/988223337555701760/1065056312297275432/static.png?width=832&height=468", // icon url for dashboard
        "mainColor": "", // main color of dashboard
        "subColor": "", // sub color for dashboard
    },
}