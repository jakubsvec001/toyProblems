const { getNthFib } = require('./nthFibonacci.js');

describe('base case', () => {
  it('1', () => {
    expect(getNthFib(0)).toBe(0);
    expect(getNthFib(1)).toBe(0);
    expect(getNthFib(2)).toBe(1);
  })
});

