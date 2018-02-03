const Rot13 = require('rot13-transform');
const path = require('path');
const Hapi = require('hapi');
const fs = require('fs');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

const handler = (req, res) => res(fs.createReadStream(path.join(__dirname, req.query.name))
  .pipe(Rot13()));

server.route({
  path: '/file',
  method: 'GET',
  handler,
});

module.exports = server;
