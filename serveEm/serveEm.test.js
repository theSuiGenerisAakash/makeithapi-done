const http = require('http');
// const serveEm = require('./serveEm');
describe('testing server with GET', () => {
  it('testing / route', () => {
    http.get('http://127.0.0.1:8080/', response => expect(response).toBe(true));
  });
});
