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

// const jsonServer = require('json-server');
// const clone = require('clone');
// const data = require('./db.json');

// const isProductionEnv = process.env.NODE_ENV === 'production';
// const server = jsonServer.create();

// // For mocking the POST request, POST request won't make any changes to the DB in production environment
// const router = jsonServer.router(isProductionEnv ? clone(data) : 'db.json', {
//   _isFake: isProductionEnv,
// });
// const middlewares = jsonServer.defaults();

// server.use(middlewares);

// server.use((req, res, next) => {
//   if (req.path !== '/') router.db.setState(clone(data));
//   next();
// });

// server.use(router);
// server.listen(process.env.PORT || 8000, () => {
//   console.log('JSON Server is running');
// });

// // Export the Server API
// module.exports = server;
