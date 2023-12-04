import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command }) => {
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  
  let neww = performance.now()
  let speed = neww - old
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `🙂 Jawn The user is not found in my database`
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Umar.jpg')
let user = global.db.data.users[who]
  
let infobt = `
🤡 *😻 UD INFO BOT 😽*
  
*STATE*
😻 *${groupsIn.length}* GROUP CHATS
😻 *${groupsIn.length}* United Groups
😻 *${groupsIn.length - groupsIn.length}* Abandoned Groups
😻 *${chats.length - groupsIn.length}* Private Chats
😻 *${chats.length}* Total Chats

*🤡 UD BOT OWNER*
  *UMAR*
😻 Instagram :
  • https://instagram.com/itz_umar_719
😻 GitHub :
  • https://github.com/umar404
😻 Telegram : 
  • t.me/@darkdevil719 (U M A R) 
😻 YouTube : 
  • https://youtube.com/@DarkDevil404

 *🤡 U D  S E R V E R*
*🛑 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 FreeRAM:* ${format(freemem())}

*🤡  NodeJS Memory *
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}
`
conn.sendFile(m.chat, pp, 'prefil.jpg', infobt, m, false, { mentions: [who] })
m.react(😽)

}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot', 'udinfo', 'botinfo']

export default handler
