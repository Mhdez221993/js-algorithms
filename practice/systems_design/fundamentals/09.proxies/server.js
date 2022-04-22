const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  console.log(req.headers);
  res.send('Hello world.\n')
});

app.listen(3000, () => console.log('Listenin on port 3000'));