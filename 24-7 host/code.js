const fetch = require('node-fetch')

setInterval(async () => {
  await fetch('Your glitch project live page URL here').then(console.log('Pinged!'))
}, 240000)
