const Inert = require('inert');
const path = require('path');
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

server.register(Inert, (err) => {
  if (err) throw err;
});

const handler = {
  file: path.join(__dirname, 'index.html'),
};


server.route({
  path: '/file',
  method: 'GET',
  handler,
});

module.exports = server;
