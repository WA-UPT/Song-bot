const config = require('../settings')
const {
    cmd,
    commands
} = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fg = require('api-dylux');
const si = require('systeminformation')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const  bot = `94754413478`



var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"

cmd({
    pattern: "setownernb",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.OWNER_NUMBER == q) return reply(`Succesfully Change To Owner Number`)
  await input_set('OWNER_NUMBER' , q)
  return reply(`owner number was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "setfooter",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.FOOTER == q) return reply(`Succesfully Change To Footer`)
  await input_set('FOOTER' , q)
  return reply(`Footer was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})



cmd({
    pattern: "setjid",
    react: "🗣️",
    desc: "To Activate auto news",
    category: "main",
    use: '.setprefix .',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner) return await reply(BOTOW)
    if ( config.JID == q) return reply(`Succesfully Song Change To This Section`)
  await input_set('JID' , q)
  return reply(`Channel Jid was changed`)
} catch (e) {
reply('*Error !!*')
l(e)
}
})