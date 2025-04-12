require('dotenv').config({ path: './elisaConfig.env' });
/*
PROJECT: QUEEN ELISA WHATSAPP BOT
VERSION: 4.0.2
OWNER: @darkmakerofc | @MR-NIMA-X
*/

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'QUEENELISA;;;==xZhVwaBT#Nr03R1285Xst8YTw50tyIJq9XLfLbNcR8l8E1fqZuuw'
',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: process.env.MONGODB_URL|| 'mongodb+srv://damiruimo:DIAGg2k98fis4C9g@x-kevin.83vo1.mongodb.net/?retryWrites=true&w=majority&appName=x-Kevin',
  PREFIX: '.$&',
  LANGUAGE: 'SI',
  PORT: process.env.PORT || 3000,
  BOT_NAME: 'queen elisa',
  OWNER_NAME: 'Zeeker',
  OWNER_NUMBER: '94743747913',
  SUDO: '94768806865',
  WORK_TYPE: 'private', // ex: public/private
  WORK_MODE: 'all', // ex: all/only_groups/only_pm
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ\nmr-nima.vercell.app',
  STICKER_AUTHOR: 'ᴍ ʀ  ɴ ɪ ᴍ ᴀ',
  STICKER_PACK: 'QUEEN ELISA',
  REMOVE_BG_APIKEY: 'mBRM6Agzhc1Ss7TJbmb9d7em',
  MAXIMUM_FILESIZE: 100, //size in MB
  OWNER_R_EMOJI: '💻',
  ALIVE_AS_GIF: true,//this only work for short videos
  AUTO_VOICE: true,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: true,// you want WORK_MODE message send
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: true,// Bot online status
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true, // This not working now !
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: true,
  INBOX_BLOCK_MSG_SEND: true,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: true,
  ANTI_BOT: true,// disabled
  BUTTON_MESSAGES: false,// Don't change this
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

