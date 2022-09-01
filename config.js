module.exports = {
    app: {
        px: 's.',
        token: 'XXX',
        watching: 'Amor para o meu dono ❤️ @f0rget#7810'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 200,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
