var linebot = require('linebot');
var bot = linebot({
  channelId: '1653721766',
  channelSecret: '787c936de8009bb8e1cc36a842deef9a',
  channelAccessToken:
    'X3TSwf+MrXUjtbdjY/INgWsIfQCIqwTzk9K99wGMB1xgN9Ff68Ci45RgEo7pqfES4zB5kn6KdQuX1iScYfhrVE38q8jk0xxZU00hl5cAmFHW11VUbyxtP8poEztc6HAri/AD2iSg92asalwxlZvzBAdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  var replyMsg = `Hello, what do you chat just now: ${event.message.text}`;
  event
    .reply(replyMsg)
    .then(function(data) {})
    .catch(function(error) {});
});

bot.listen('/linewebhook', 4000, function() {
  console.log('Bot is running');
});
