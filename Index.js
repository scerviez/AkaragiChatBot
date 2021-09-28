const Slimbot = require('slimbot');
const nk = new Slimbot(process.env.TOKEN);
const bot = require('chatbotapi')
bot.chatbotsetup(process.env.BRAIN_ID, process.env.API_KEY)

nk.on('message', ctx => {
var msg = ctx.text
  bot.sendmsg(msg)
 .then((res) => {
  nk.sendMessage(ctx.chat.id, res);
 })
});

nk.startPolling();
