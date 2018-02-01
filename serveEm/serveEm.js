const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 8080),
  port: 8654,
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, response) => {
    response('Hello hapi');
  },
});

module.exports = server;
