const help = require('./helpers/helper');
const helperEx = require('./helperEx');

describe('testing helper function', () => {
  it('testing with a valid object', () => {
    const objTry = { data: { root: { query: { name: 'fin', suffix: 'ally' } } } };
    expect(help(objTry)).toBe('finally');
  });
});

describe('testing templating with helper functions', () => {
  it('testing with strings passed as GET params', (done) => {
    const strObj = { str: 'Yeah', exclaim: '!' };
    helperEx.inject({ method: 'GET', url: `/?name=${strObj.str}&suffix=${strObj.exclaim}` }, (res) => {
      expect(res.result).toBe('Hell Yeah!\n');
      done();
    });
  });
});
