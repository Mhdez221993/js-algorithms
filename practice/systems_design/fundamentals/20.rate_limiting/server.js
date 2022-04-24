const database = require('./database');
const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening on port 3000.'));

// Keep a has table of the previous access time for each user.
const redis = {};

app.get('/index.html', (req, res) => {
  const { user } = req.headers;

  if (user in redis) {
    const previousAccessTime = redis[user];

    // Limit to 1 every 5 seconds.
    if (Date.now() - previousAccessTime < 5000) {
      res.status(429).send('Too many request.\n');
      return;
    }
  }

  // Save the page and store this access time.
  database.get('index.html', page => {
    redis[user] = Date.now();
    res.send(page + '\n');
  });
});
