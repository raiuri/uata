const venom = require('venom-bot');
import MenssagesServiceCustom from './service/clientMessagesCustom';

venom
  .create()
  .then((client: any) => start(client))
  .catch((erro: any) => {
    console.log(erro);
  });

function start(client: any) {
  client.onMessage((message: any) => {
      MenssagesServiceCustom.startChatMensage(message, client);
    // if (message.body === 'Hi' && message.isGroupMsg === false) {
    //   client
    //     .sendText(message.from, 'Welcome Venom 🕷')
    //     .then((result) => {
    //       console.log('Result: ', result); //return object success
    //     })
    //     .catch((erro) => {
    //       console.error('Error when sending: ', erro); //return object error
    //     });
    // }
  });
}