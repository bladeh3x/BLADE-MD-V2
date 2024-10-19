//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxdavid126@gmail.com";
global.location = "lakota, asia";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bladeh3x/BLADE-MD-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.devs = "https://t.me/alex";
global.sudo = process.env.SUDO || "2348059540212";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/c5121735684e9a7848a03.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUUwaUNOM2JOaUFEK1p2aU01aUw1bkdNc3c5UTVnSjRkN0EzWG8yRGZrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblU2bFMwS1hvZkc3dENPWFZnV0pGNHM4K1VrWU9FNFBUUXNLSTFVU2lXdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QlFNaEdodVlQWXovR0pMTVp3VkhrdHBXaTBGUkJVME9ObSszYk1mOEVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSjBaNzVXUElYWG94cjU5aTZpbDJGdzdUOXZoYk02Z1N3SnZKV1Y4cDNNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndMNGowbDZ1cnlTOG9vVnRON0tVUFphck5zZzk1aFFsL29POTA3V3AwRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhibWJ3YTV5cnh2ZkYwbzkvMlJCNDVIblkzQW5zaVRqSDBqREpZbkdObWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05aTFB4TG45bUZUUjErNFBmdUNBaTFDRFpJMUg0NDFUaldzaFpPTVZYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBCNGI4OUZWNUlDRk5UMWZZVm91NExHZnNWYXZnZlJOS1FjVXNzdCtRYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFlV0FGbTk3QkhhelU4a28rdVlrVzBpcDBFQ1JQL1ZpdzRlZGV5Z2czRFFYblMxRk5ZYTRkRUd5bDU4cmgvWXJDV3ZpajdCTFlkU0NyMlkrZzZqWWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiI4V25scTd1R0tTZ3dCY21ia0M0OHEvN0RsbDl0UGNWbVNYSEtvUmY1cENBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKUmUyenhFY1RtZTZ0NzZLNE0yNURBIiwicGhvbmVJZCI6IjM5MTgzNWE1LThiZDctNDgwNC1hMWRmLTQwY2RmNWMxYWU1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGVmtZTlJxa1JqeWJteGV5OStXb2RKaU1mQW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFlJY1dDWDdmakJnb0hITjJFc2FoUG1QYjFVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNENTFaWEI4IiwibWUiOnsiaWQiOiIyMzQ4MDU5NTQwMjEyOjY1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ1UvMFlRM2I3TXVBWVlFaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1M3ZaT0xoSjFaSk5zWnMybTRyODB6U0tGOUJWT1o0YWRWZFlKOFJueHhFPSIsImFjY291bnRTaWduYXR1cmUiOiJiQ1JUb3ZZQjZYSmoycmRZaEFCNDVwRnQ0SjVhZFpVcngxQ2dkUytJSDN0ZzBGQTNYNTUydlZUdDlJUlVpOUV3eDhYelVTWTZzV3BxS1V2dTNaU1pCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2crZVM0eEwrSWRKY3NTMkQvdmx0UVZtc2M2Z2tSTmcyOTM4UFZkZG9TcWxlb3RadUFTZkZQK2lDU2hIb0Q0bW5JVGJ0QitRRzhnZTEwSkZaZW1qamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDU5NTQwMjEyOjY1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVkNzJUaTRTZFdTVGJHYk5wdUsvTk0waWhmUVZUbWVHblZYV0NmRVo4Y1IifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkzMDY0NzV9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BLADE-MD™`",
  author: process.env.PACK_AUTHER || "BLADE-MD-V2",
  packname: process.env.PACK_NAME || "ALEX",
  botname: process.env.BOT_NAME || "BLADE-MD-V2",
  ownername: process.env.OWNER_NAME || "Alex-tv",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BLADE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
