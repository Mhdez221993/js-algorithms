const messagingApi = require('./messageing_api');

const TOPIC_ID = process.env.TOPIC_ID;

function displayMessages(mesage) {
  console.log(`> ${mesage.name}: ${mesage.text}`);
}

function streamMessages() {
  const messagingSocket = messagingApi.subscribe(TOPIC_ID);

  messagingSocket.on('message', (data) => {
    const message = JSON.parse(data);
    displayMessages(message);
  });
}

streamMessages();
