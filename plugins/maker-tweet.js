let handler = async (m, { conn, text }) => {
    if (!text) throw 'Jawn You Can Use Any Text With Command';
  
    const avatar = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    const displayName = conn.getName(m.sender);
    const username = m.sender.split('@')[0];
    const replies = '69'; // Replace with the desired value
    const retweets = '69'; // Replace with the desired value
    const theme = 'dark'; // Replace with the desired value
  
    const url = `https://some-random-api.com/canvas/misc/tweet?displayname=${encodeURIComponent(displayName)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(avatar)}&comment=${encodeURIComponent(text)}&replies=${encodeURIComponent(replies)}&retweets=${encodeURIComponent(retweets)}&theme=${encodeURIComponent(theme)}`;
  
    conn.sendFile(m.chat, url, 'tweet.png', '*😽 JANU THANKS FOR TWEETING AND USING UD MD BOT 😻*', m);
  };
  
  handler.help = ['tweet <comment>'];
  handler.tags = ['maker'];
  handler.command = /^(tweet)$/i;
  
  export default handler;
