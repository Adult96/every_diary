const jsonServer = require('json-server');
const path = require('path');

const fs = require('fs');
const os = require('os');

fs.copyFile('db.json', os.tmpdir() + '/db.json', function (err) {
  if (err) console.log(err);
  else console.log('copy file succeed to' + os.tmpdir());
});

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + '/db.json'));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + '/../build/'),
});

const port = process.env.PORT || 3001;

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running');
});

