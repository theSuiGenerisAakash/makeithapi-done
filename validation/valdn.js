const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

function handler(request, reply) {
  reply(`${request.params.fingers} is valid`);
}

server.route({
  path: '/chickens/{fingers}',
  method: 'GET',
  handler,
  config: {
    validate: {
      params: {
        fingers: Joi.string().required(),
      },
    },
  },
});

if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
}

module.exports = server;
