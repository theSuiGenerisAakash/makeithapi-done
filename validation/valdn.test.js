const valdn = require('./valdn');

describe('testing validation on params', () => {
  it('testing the required parameter', (done) => {
    const reqParam = 'yes';
    valdn.inject({ method: 'GET', url: `/chickens/${reqParam}` }, (res) => {
      expect(res.result).toBe('yes is valid');
      done();
    });
  });
});
