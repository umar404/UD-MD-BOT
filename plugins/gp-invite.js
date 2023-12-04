
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `✳️ Jawn Enter the number you want to send a group invite to\n\n📌 Example :\n*${usedPrefix + command}*923165123719`
if (text.includes('+')) throw  `Enter number without *+*`
if (isNaN(text)) throw ' 📌 Enter only numbers without your country code with no spaces'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `≡ *Assalamualikum Jawn INVITATION TO GROUP*\n\nA user invited you to join this group \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`🤡Jawn  An invite link was sent to the user`) 

}
handler.help = ['invite <92316xxx>']
handler.tags = ['group']
handler.command = ['invite','add'] 
handler.group = true
handler.admin = false
handler.botAdmin = true

export default handler
