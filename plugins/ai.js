const axios = require("axios");
const { cmd } = require("../lib/command"); // Bot framework එකට අනුව change කරන්න

const GEMINI_API_KEY = "AIzaSyBvcR77mx41dC_dTdcJtZDSBvXAoCym_Eo"; // API Key එක

cmd(
  {
    pattern: "ask",
    alias: ["gemini", "gpt", "ai"],
    react: "🤖",
    desc: "Ask Gemini AI anything",
    category: "ai",
    filename: __filename,
  },
  async (robin, mek, m, { from, q, reply }) => {
    try {
      if (!q)
        return reply("❓ Please provide a question.\n\n*Example:* `.ask What is the capital of France?`");

      await reply("🤖 Gemini is thinking...");

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [{ parts: [{ text: q }] }],
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const aiReply = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (!aiReply) return reply("❌ Gemini did not return a valid response.");

      await robin.sendMessage(from, { text: `🤖 *Gemini says:*\n\n${aiReply}` }, { quoted: mek });
    } catch (e) {
      const errMsg = e?.response?.data?.error?.message || e.message || "Unknown error occurred.";
      console.error("Gemini API Error:", errMsg);
      reply(`❌ Error from Gemini API:\n\n${errMsg}`);
    }
  }
);
