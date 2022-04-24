const messagingApi = require('./messageing_api');
const readline = require('readline');

const TOPIC_ID = process.env.TOPIC_ID;

const terminal = readline.createInterface({
  input: process.stdin,
});

terminal.on('line', text => {
  const name = process.env.NAME;

  const message = { text, name };

  messagingApi.publish(message, TOPIC_ID);
});
