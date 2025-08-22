const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'DINUWH-MD=tvU3RYRR#VTasWZlKulqFTrAZM8_VfXN2kuiAMsYCfUAmsRuRnzg' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
OWNER_NUMBER: process.env.OWNER_NUMBER || "94754413478",
ANTI_CALL: process.env.ANTI_CALL || "true",
MODE: process.env.MODE === undefined ? 'nonbutton' : process.env.MODE,
STATUS_REPLY_MESSAGE: 'ʏᴏᴜʀ ꜱᴛᴀᴛᴜꜱ ᴊᴜꜱᴛ ɴᴏᴡ ꜱᴇᴇɴ ʙʏ Qᴜᴇᴇɴ ᴅᴇᴡᴍɪɴɪ ᴍᴅ',    
ALIVE:  process.env.ALIVE  || '> QUEEN DEWMINI MD'  , 
FOOTER: process.env.FOOTER || '> ∂ιηυω-χ вєтα✔️',
Freedom: process.env.Freedom ||"120363370227470443@newsletter",
JID: process.env.JID || "120363420152355428@newsletter",
TEXT: process.env.TEXT || "120363420152355428@newsletter",
FOOTER: '> 🎸🔮 44 Vibe | Music |➴ 🇱🇰',
DIRECTION: true,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
