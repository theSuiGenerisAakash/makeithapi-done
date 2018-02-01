const restWell = require('./restWell');

describe('testing route with params', () => {
  it('testing with random string', (done) => {
    const strParam = 'Aakash';
    restWell.inject({ method: 'GET', url: `/${strParam}` }, (res) => {
      expect(res.result).toBe('Hello Aakash');
      done();
    });
  });
  it('testing with a number', (done) => {
    const numParam = NaN;
    restWell.inject({ method: 'GET', url: `/${numParam}` }, (res) => {
      expect(res.result).toBe('Hello NaN');
      done();
    });
  });
  it('testing with a POST', (done) => {
    const numParam = NaN;
    restWell.inject({ method: 'POST', url: `/${numParam}` }, (res) => {
      expect(res.statusCode).toBe(404);
      done();
    });
  });
});
