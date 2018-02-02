const direct = require('./direct');

describe('testing request routing', () => {
  it('testing for a file with GET', (done) => {
    direct.inject({ method: 'GET', url: '/foo/bar/baz/file.html' }, (res) => {
      expect(res.result).toBe('Verma\n');
      done();
    });
  });
  it('testing for a file with POST', (done) => {
    direct.inject({ method: 'POST', url: '/foo/bar/baz/file.html' }, (res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});
