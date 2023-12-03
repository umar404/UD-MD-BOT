let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	let tee = `😽 Jawn Enter a short text\n\n🤡 Example  : *${usedPrefix + command}* UMAR`
	let too = `🙂 Jawn Separate the text with a *+* \n\n🤡 Example : \n*${usedPrefix + command}* UMAR *+* BOT`
	
	m.react(rwait);
	
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'ud1':
		if (!text) throw tee;
		let chut = `https://api.caliph.biz.id/api/kaneki?nama=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, chut, 'logo.png', `😻 Result By UD-MD-BOT`, m);
		m.react(done);
		break;
		
	  case 'ud2': 
		if (!text) throw too;
		if (!text.includes('+')) throw too;
		let [a, b] = text.split('+');
		let loda = `https://api.caliph.biz.id/api/girlneko?nama=${encodeURIComponent(a.trim())}&nama2=${encodeURIComponent(b.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, loda, 'logo.png', `😻 Result By UD-MD-BOT`, m);
		
		m.react(done);
		break;
		
	  case 'ud3':
		if (!text) throw tee;
		let cp = `https://api.caliph.biz.id/api/rem?nama=${encodeURIComponent(text.trim())}&apikey=caliphkey`;
		conn.sendFile(m.chat, cp, 'logo.png', `😻 Result By UD-MD-BOT`, m);
		m.react(done);
		break;
		
	  case 'ud4': 
		if (!text) throw tee;
		let gandu = `https://api.caliph.biz.id/api/textpro/matrix?text=${encodeURIComponent(text)}&apikey=caliphkey`;
		conn.sendFile(m.chat, gandu, 'logo.png', `😻 Result By UD-MD-BOT`, m);
		m.react(done);
		break;
		case 'gfx5':
    if (!text) throw tee
    const apiUrll = `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
    conn.sendFile(m.chat, apiUrll, 'logo.png', '😻 Result By UD-MD-BOT', m);
    m.react('😻');
    break;

	case 'ud6': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [c, d] = text.split`+`   
	const apiUrl = `https://api.lolhuman.xyz/api/textprome2/lionlogo?apikey=${lolkeysapi}&text1=${encodeURIComponent(c)}&text2=${encodeURIComponent(d)}`
	conn.sendFile(m.chat, apiUrl, 'logo.png', `😻 Result By UD-MD-BOT`, m)
	m.react(done)
	break 
	case 'ud7': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [e, f] = text.split('+');
	let oda = `https://api.lolhuman.xyz/api/photooxy2/battlefield4?apikey=${lolkeysapi}&text1=${encodeURIComponent(e.trim())}&text2=${encodeURIComponent(f.trim())}`;
	conn.sendFile(m.chat, oda, 'logo.png', `😻 Result By UD-MD-BOT`, m);
	
	m.react(done);
	break 
	case 'ud8': 
	if (!text) throw tee;
	let rand = `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rand, 'logo.png', `😻 Result By UD-MD-BOT`, m);
	m.react(done);
	break;
	case 'ud9': 
	if (!text) throw tee;
	let randi = `https://api.lolhuman.xyz/api/ephoto1/avatarlolnew?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randi, 'logo.png', `😻 Result By UD-MD-BOT`, m);
	m.react(done);
	break;
	case 'ud10': 
	if (!text) throw tee;
	let randu = `https://api.lolhuman.xyz/api/ephoto1/avatardota?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, randu, 'logo.png', `😻 Result By UD-MD-BOT`, m);
	m.react(done);
	break;
	case 'ud11': 
	if (!text) throw too;
	if (!text.includes('+')) throw too;
	let [g, h] = text.split('+');
	let od = `https://api.lolhuman.xyz/api/ephoto2/codwarzone?apikey=${lolkeysapi}&text1=${encodeURIComponent(g.trim())}&text2=${encodeURIComponent(h.trim())}`;
	conn.sendFile(m.chat, od, 'logo.png', `😻 Result By UD-MD-BOT`, m);
	
	m.react(done);
	break 
	case 'ud12': 
	if (!text) throw tee;
	let rr = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkeysapi}&text=${encodeURIComponent(text)}`;
	conn.sendFile(m.chat, rr, 'logo.png', `😻 Result By UD-MD-BOT`, m);
	m.react(done);
	break;

	  default:
	} 
  };
  
  handler.help = ['ud1', 'ud2', 'ud3', 'ud4', 'ud5', 'ud6', 'ud7', 'ud8', 'ud9', 'ud10', 'ud11', 'ud12'];
  handler.tags = ['ud maker'];
  handler.command = /^(ud1|ud2|ud3|ud4|ud5|ud6|ud7|ud8|ud9|ud10|ud11|ud12)$/i;
  handler.diamond = false;
  
  export default handler;
  

  
