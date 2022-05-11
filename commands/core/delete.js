exports.run = async (client, message, args) => {
    if (!message.member.roles.cache.some(r=>["Staff", "Moderator", "Admin"].includes(r.name)))
    return message.reply("you don't have permission!");

    let totalDelMsg = parseint(args[0]) + 1;
    let apagadas = totalDelMsg - 1;

    async function clear () {
        try {
            message.delete();
            message.channel.bulkDelete(totalDelMsg);
            message.reply(`${apagadas} deleted messages`)
        } catch(e) {
            return message.reply("something wrong");
        }
    }

    clear();
}