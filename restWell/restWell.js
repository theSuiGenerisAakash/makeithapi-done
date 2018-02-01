const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

function handler(request, reply) {
  reply(`Hello ${request.params.name}`);
}

server.route({
  path: '/{name}',
  method: 'GET',
  handler,
});

module.exports = server;
