const restWell = require('./restWell');

describe('testing route with params', () => {
  it('testing with random string', (done) => {
    const strParam = 'Aakash';
    restWell.inject({ method: 'GET', url: `/${strParam}` }, (res) => {
      expect(res.result).toBe('Hello Aakash');
      done();
    });
  });
});
