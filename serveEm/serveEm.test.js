const serveEm = require('./serveEm');

describe('testing server with GET', () => {
  it('testing / route', (done) => {
    serveEm.inject({ method: 'GET', url: '/' }, (res) => {
      expect(res.result).toBe('Hello hapi');
      done();
    });
  });
});
