const database = {
  ['index.html']: '<h1>Hello world</h1>',
}

module.exports.get = (key, callback) => {
  setTimeout(() => {
    callback(database[key]);
  }, 3000);
}
