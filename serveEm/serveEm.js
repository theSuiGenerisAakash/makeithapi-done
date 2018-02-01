const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response(true);
  },
});

server.start();
module.exports = server;
