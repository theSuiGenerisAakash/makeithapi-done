const handling = require('./handling');

describe('testing for file response', () => {
  it('testing with GET', (done) => {
    const options = { method: 'GET', url: '/file' };
    handling.inject(options, (res) => {
      expect(res.result).toBe('Aakash\n');
      done();
    });
  });
  it('testing with POST', (done) => {
    const options = { method: 'POST', url: '/file' };
    handling.inject(options, (res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});
