//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `😹 Hey Ghamsti You are already registered\n\nDo you want to re-register?\n\n 📌 Jawn You Can Use this command to remove your record If You Want\n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text)) throw `⚠️ Format incorrect\n\n 👻 Meri Jawn You Can Use this command: *${usedPrefix + command} name.age*\n📌Example : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🤔 Jawn The name cannot be empty'
  if (!age) throw '🙂 Jawn age cannot be empty'
  if (name.length >= 30) throw 'Hey Fuc*king Bitch The name is too long' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow grandpa wants to play bot 😹 '
  if (age < 5) throw '🚼  there is a grandpa baby jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTERED BY UD-MD-BOT* 」─
▢ *NUMBER:* ${name}
▢ *AGE* : ${age} years
▢ *SERIEL NUMBER* :
${sn}
└──────────────

 *${usedPrefix}help* to see menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

