const Rot13 = require('rot13-transform');
const path = require('path');
const Hapi = require('hapi');
const fs = require('fs');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080),
});

// const handler = (req, res) => res(fs.createReadStream(path.join(__dirname, 'main.txt'))
//   .pipe(Rot13()));

const handler = (req, res) => res(fs.createReadStream(path.join(__dirname, req.query.name))
  .pipe(Rot13()));

server.route({
  path: '/file',
  // path: '/',
  method: 'GET',
  handler,
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
