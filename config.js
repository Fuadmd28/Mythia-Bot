let fs = require('fs')
let kontol = fs.readFileSync('./logo4.jpg')
let foto = fs.readFileSync('./logo2.jpg')
let ness = fs.readFileSync('./logo5.jpg')
global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/Ix8SHYHTYdB98ERHBUI2NA']
global.owner = ['994407638407', '62895612153565', '62895603352610', '6285693120588', '6283829756773', '994407533488'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  rikka: 'https://rikka-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://rikka-api.herokuapp.com': 'beta',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'trial',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://api.xteam.xyz': 'aruliazmi',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'ASJJMOFsjrVE8eZq1jgtGL4rGVE',
}

// Sticker WM
global.packname = 'I hope you\'re fine'
global.author = 'YukiBot'
global.image = kontol
global.image2 = foto
global.image3 = ness

global.eror = '_[!] Fitur Ini Sedang Eror_'
global.wait = '_tunggu_'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})