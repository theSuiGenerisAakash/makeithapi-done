const views = require('./views');

describe('testing data injection into templates', () => {
  it('testing with a string', (done) => {
    views.inject({ method: 'GET', url: '/?name=rocks' }, (res) => {
      expect(res.result).toMatch('BMSCE rocks');
      done();
    });
  });
});
