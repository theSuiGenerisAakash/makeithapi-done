const Hapi = require('hapi');
const vision = require('vision');
const handlebars = require('handlebars');
const Path = require('path');

const server = new Hapi.Server();

server.register(vision, (err) => {
  if (err) throw err;
});

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

server.route({
  path: '/',
  method: 'GET',
  handler: { view: 'index.html' },
});

server.views({
  engines: {
    html: handlebars,
  },
  path: Path.join(__dirname, 'templates'),
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
