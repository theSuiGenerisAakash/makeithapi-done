const Rot13 = require('./Rot13');

describe('testing ROT13 on file streams', () => {
  it('testing ROT13 on a sample text file', (done) => {
    Rot13.inject({ method: 'GET', url: '/file?name=sample1.txt' }, (res) => {
      expect(res.result).toBe('oyn oyn oyn\n');
      done();
    });
  });
});
