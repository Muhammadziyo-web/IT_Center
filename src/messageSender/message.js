const TelegramBot = require("node-telegram-bot-api");

const botToken = process.env.TOKEN;

const bot = new TelegramBot(botToken, { polling: true });

bot.on("message", (msg) => {
  
  if (msg.text === "/start") {
    const {id:chatId,username} = msg.chat;
    
    bot.sendMessage(chatId, `Assalomu alekum ${msg.from.first_name}`);
    bot.sendMessage("@Rate_sender_bot", "asdasda");  
  }
});
     
module.exports = bot
