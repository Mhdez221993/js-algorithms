const express = require('express');
const fs = require('fs');
const app = express();

const staticConfig = JSON.parse(fs.readFileSync('static_config.json'));

app.listen(3000, console.log('Listen on port 3000.'));

app.get('/static/new_feature.html', (req, res) => {
  if (!staticConfig.newFeatureLaunched) {
    res.status(401).send('Unauthorized.\n');
    return;
  }

  res.send('<html>Hello World!</html>\n'); ''
});
