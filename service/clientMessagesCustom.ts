//import venom from 'venom-bot';

class MenssagesServiceCustom {
    
    startChatMensage(message: any, client: any) {
        let chatStatus = false;

        if (message.body && message.isGroupMsg === false) {

        if (chatStatus === false) {
            chatStatus = true;
            client.sendText(message.from, 'Olá! Por favor informe o seu nome.')
             .then((result: any) => {
                 console.log('Result: ', result); //return object success
            })
            .catch((erro: any) => {
                console.error('Error when sending: ', erro); //return object error
            });
        }
        
        
       }
        
    }

    menssages() {
        // regras de negócios para qual mensagem será exibida
    }

    finishChat() {
        // encerra chat
    }
}

export default new MenssagesServiceCustom();