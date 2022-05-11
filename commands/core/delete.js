module.exports = {
    name:'delete',
    aliases: "d",
    utilisasion: '{prefix}delete',

    execute(message, args) {
        if(!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number");

        if(args[0] > 100) return message.reply("You cannot delete delete more than 100 messages!");
        if(args[0] < 1) return message.reply("You must delete atleast one message!");
    }
}