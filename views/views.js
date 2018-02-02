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
  port: 8080,
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

module.exports = server;
