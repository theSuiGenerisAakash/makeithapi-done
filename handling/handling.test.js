const handling = require('./handling');

describe('testing for file response', () => {
  it('testing with GET', (done) => {
    const options = { method: 'GET', url: '/file' };
    handling.inject(options, (res) => {
      expect(res.result).toBe('Aakash\n');
      done();
    });
  });
});
