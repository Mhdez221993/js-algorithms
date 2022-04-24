const helper = require('./helper');
const messagingApi = require('./messageing_api');
const readline = require('readline');

const displayedMessages = {};

const terminal = readline.createInterface({
  input: process.stdin,
});

terminal.on('line', text => {
  const username = process.env.NAME;
  const id = helper.getRandomInt(100000);
  displayedMessages[id] = true;

  const message = { id, text, username };
  messagingApi.sedMessage(message);
});

function displayMessages(mesage) {
  console.log(`> ${mesage.username}: ${mesage.text}`);
  displayedMessages[mesage.id] = true;
}

async function getAndDisplayMessages() {
  const messages = await messagingApi.getMessages();

  for (const message of messages) {
    const messageAlreadyDisplayed = message.id in displayedMessages;
    if (!messageAlreadyDisplayed) displayMessages(message);
  }
}

function pollMessages() {
  setInterval(getAndDisplayMessages, 3000);
}

function streamMessages() {
  const messagingSocket = messagingApi.createMessagingSocket();

  messagingSocket.on('message', data => {
    const message = JSON.parse(data);
    const mesaageAlreadyDisplayed = message.id in displayedMessages;
    if (!mesaageAlreadyDisplayed) displayMessages(message);
  });
}

if (process.env.MODE === 'poll') {
  getAndDisplayMessages();
  pollMessages();
} else if (process.env.MODE === 'stream') {
  getAndDisplayMessages();
  streamMessages();
}
