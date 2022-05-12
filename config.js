module.exports = {
    app: {
        px: 's.',
        token: 'OTc0MDkyNzg0NjY1NTIyMjM3.Gq5F75.4TGsL5PiYuLtGsfj-tvh4sE5nkR2kQ2VahBDSE',
        watching: 'Amor para o Psycho ❤️'
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
