const help = require('./helpers/helper');
// const helperEX = require('./helperEx');

describe('testing helper function', () => {
  it('testing with a valid object', () => {
    const objTry = { data: { root: { query: { foo: 'fin', bar: 'ally' } } } };
    expect(help(objTry)).toBe('finally');
  });
});
