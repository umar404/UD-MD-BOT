
let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('😽 Jawn The Group link has been successfully reset By UD Bot\n\n📌 Here Is Your New link Take It And Add Some Bachiyan:\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['resetlink']
handler.tags = ['group']
handler.command = ['revoke', 'resetlink', 'offlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
