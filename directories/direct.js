const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');

const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.register(Inert, (err) => {
  if (err) throw err;
});

const handler = (req, res) => {
  const fileLoc = path.join(__dirname, `/public/${req.params.name}`);
  res.file(fileLoc);
};

server.route({
  path: '/foo/bar/baz/{name}',
  method: 'GET',
  handler,
});

module.exports = server;
