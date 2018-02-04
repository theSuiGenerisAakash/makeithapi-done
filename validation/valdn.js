const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

function handler(request, reply) {
  reply(`${request.params.breed} is valid`);
}

server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler,
  config: {
    validate: {
      params: {
        breed: Joi.string().required(),
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
