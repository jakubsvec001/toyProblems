const { longestPeak } = require('./longestPeak');

describe('base cases', () => {
  const array_0 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
  it('0', () => {
    expect(longestPeak(array_0)).toBe(6);
  });
});
