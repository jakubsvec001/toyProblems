const { twoNumberSum } = require('./twoNumberSum');

describe('base cases', () => {
  test('#1', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10).sort()).toEqual([
      -1,
      11,
    ]);
  });

  test('#2', () => {
    expect(twoNumberSum([1, 2, 3, 4, 5], 10)).toEqual([]);
  });
});

describe('edge cases', () => {
  test('empty array input', () => {
    expect(twoNumberSum([])).toEqual([]);
  });
});
