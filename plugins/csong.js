const { cmd } = require("../lib/command");
const yts = require("yt-search");
const axios = require("axios");
const config = require("../settings");

cmd(
  {
    pattern: "poddasong",
    desc: "song MP3 sender to configured JID",
    category: "download",
    react: "🎧",
    filename: __filename,
  },
  async (robin, mek, m, { q, reply }) => {
    try {
      if (!q) return reply("*ඔයාලා ගීත නමක් හෝ YouTube ලින්ක් එකක් දෙන්න...!*");

      const search = await yts(q);
      if (!search.videos.length) return reply("*ගීතය හමුනොවුණා... ❌*");

      const data = search.videos[0];
      const ytUrl = data.url;
      const ago = data.ago;

      const api = `https://yt-five-tau.vercel.app/download?q=${ytUrl}&format=mp3`;
      const { data: apiRes } = await axios.get(api);

      if (!apiRes?.status || !apiRes.result?.download) {
        return reply("❌ ගීතය බාගත කළ නොහැක. වෙනත් එකක් උත්සහ කරන්න!");
      }

      const result = apiRes.result;    
        
      const caption = `\`☘️ ᴛɪᴛʟᴇ\` :${result.title}

\`00:00\` ━━━━▶──────── \`${data.timestamp}\`

❒ 📅 Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ : ${ago}
❒ 🎭 ᴠɪᴇᴡꜱ : ${data.views}

_🎧 Use headphones for best experience 🎸🩵_

\`මේ වගේ ලස්සන සිංදු හැමදාම අහන්න මෙන්න මෙහෙට එන්ඩ පැටියෝ 🤭💕..\`

${config.FOOTER}`;

      // Send thumbnail with captio     
      await robin.sendMessage(
        config.JID,
        {
          image: { url: result.thumbnail },
          caption: caption,
        },
        { quoted: mek }
      );

      // Send PTT Audio
        await new Promise(resolve => setTimeout(resolve, 30000));
       
      await robin.sendMessage(
        config.JID,
        {
          audio: { url: result.download },
          mimetype: "audio/mpeg",
          ptt: true,
        },
        { quoted: mek }
      );

      // Send Confirmation
      await robin.sendMessage(
        mek.key.remoteJid,
        {
          text: `✅ *"${result.title}"* This Song ||*Sended😒👈`,
        },
        { quoted: mek }
      );

    } catch (e) {
      console.error(e);
      reply("*ඇතැම් දෝෂයකි! පසුව නැවත උත්සහ කරන්න.*");
    }
  }
);

///===(
cmd(
  {
    pattern: "mypoddasong",
    desc: "song MP3 sender to configured JID",
    category: "download",
    react: "🎧",
    filename: __filename,

  },

  async (robin, mek, m, { q, reply }) => {

    try {

      if (!q) return reply("*ඔයාලා ගීත නමක් හෝ YouTube ලින්ක් එකක් දෙන්න...!*");

      // Check if input is a valid YouTube URL

      const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;

      let ytUrl = "";
      if (ytRegex.test(q)) {
        ytUrl = q;
      } else {
        const search = await yts(q);
        if (!search.videos.length) return reply("*ගීතය හමුනොවුණා... ❌*");
        ytUrl = search.videos[0].url;
      }

      const api = `https://yt-five-tau.vercel.app/download?q=${ytUrl}&format=mp3`;

      const { data: apiRes } = await axios.get(api);
      if (!apiRes?.status || !apiRes.result?.download) {
        return reply("❌ ගීතය බාගත කළ නොහැක. වෙනත් එකක් උත්සහ කරන්න!");
      }
        
    const result = apiRes.result;
await robin.sendMessage(
        config.JID,
        {
          audio: { url: result.download },
          mimetype: "audio/mpeg",
          ptt: true,
        },

        { quoted: mek }

      );
      // Notify sender

      await robin.sendMessage(
        mek.key.remoteJid,
        {

          text: `✅ *"${result.title}"* This Song || *Sended😒👈`,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      reply("*ඇතැම් දෝෂයකි! පසුව නැවත උත්සහ කරන්න.*");
    }
  }
    );
  ////====
    cmd(

  {

    pattern: "poddasong2",
    desc: "song MP3 sender to configured JID",
    category: "download",
    react: "🎧",
    filename: __filename,

  },

  async (robin, mek, m, { q, reply }) => {

    try {

      if (!q) return reply("*ඔයාලා ගීත නමක් හෝ YouTube ලින්ක් එකක් දෙන්න...!*");

      const search = await yts(q);
      if (!search.videos.length) return reply("*ගීතය හමුනොවුණා... ❌*");

      const data = search.videos[0];
      const ytUrl = data.url;
      const ago = data.ago;

      const api = `https://manul-official-new-api-site.vercel.app/convert?mp3=${encodeURIComponent(ytUrl)}&apikey=Manul-Official`;

      const { data: apiRes } = await axios.get(api);

      if (!apiRes?.status || !apiRes.data?.url) {

        return reply("❌ ගීතය බාගත කළ නොහැක. වෙනත් එකක් උත්සහ කරන්න!");

      }

      const result = {
        title: data.title,
        thumbnail: data.thumbnail,
        download: apiRes.data.url,
      };
        

      const caption =  `\`☘️ ᴛɪᴛʟᴇ\` :${result.title}

\`00:00\` ━━━━▶──────── \`${data.timestamp}\`

❒ 📅 Rᴇʟᴇᴀꜱᴇ Dᴀᴛᴇ : ${ago}

❒ 🎭 ᴠɪᴇᴡꜱ : ${data.views}

_🎧 Use headphones for best experience 🎸🩵_

\`මේ වගේ ලස්සන සිංදු හැමදාම අහන්න මෙන්න මෙහෙට එන්ඩ පැටියෝ 🤭💕..\`

${config.FOOTER}`;
      await robin.sendMessage(
        config.JID,
        {
          image: { url: result.thumbnail },
          caption: caption,
        },
        { quoted: mek }
      );
      // Send PTT Audio
        await new Promise(resolve => setTimeout(resolve, 30000));
      await robin.sendMessage(
        config.JID,
        {
          audio: { url: result.download },
          mimetype: "audio/mpeg",
          ptt: true,
        },
        { quoted: mek }
      );
      // Send Confirmation
      await robin.sendMessage(
        mek.key.remoteJid,
        {
          text: `✅ *"${result.title}"* This Song ||*Sended😒👈`,

        },
        { quoted: mek }
      );
    } catch (e) {
      console.error(e);
      reply("*ඇතැම් දෝෂයකි! පසුව නැවත උත්සහ කරන්න.*");

    }
  }
  );