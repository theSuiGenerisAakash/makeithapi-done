const views = require('./views');

describe('testing data injection into templates', () => {
  it('testing with a string', (done) => {
    views.inject({ method: 'GET', url: '/?name=rocks' }, (res) => {
      expect(res.result).toMatch('BMSCE rocks');
      done();
    });
  });
  it('testing with no paramters', (done) => {
    views.inject({ method: 'GET', url: '/?name=' }, (res) => {
      expect(res.result).toMatch('BMSCE ');
      done();
    });
  });
  it('testing with a JSON string', (done) => {
    views.inject({ method: 'GET', url: '/?name={ "hello": "world" }' }, (res) => {
      expect(res.result).toBe('BMSCE { &quot;hello&quot;: &quot;world&quot; }\n');
      done();
    });
  });
});
