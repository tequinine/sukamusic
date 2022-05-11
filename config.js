module.exports = {
    app: {
        px: '*',
        token: 'OTczOTkxMjQ4NTUxNjI0NzA0.GpqR2x.Ax8xdNw_JgiFNFD4VANm0UWUOG3GNtat0a8eNg',
        playing: 'by Psycho ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
