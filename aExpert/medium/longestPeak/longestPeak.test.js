const { longestPeak } = require('./longestPeak');

describe('base cases', () => {
  const array_0 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
  it('0', () => {
    expect(longestPeak(array_0)).toBe(6);
  });
  it('1', () => {
    expect(longestPeak([0, 1, 2, 2, 0])).toBe(0);
  });
  it('2', () => {
    expect(longestPeak([1, 4, 10, 2])).toBe(4);
  });
  it('3', () => {
    expect(longestPeak([0,0,0,1,2,3,2,3])).toBe(4);
  })
});
