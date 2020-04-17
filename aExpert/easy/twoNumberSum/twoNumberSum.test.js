const { twoNumberSum } = require('./twoNumberSum');

describe('base cases', () => {
  test('#1', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10).sort((a, b) => a-b)).toEqual([
      -1,
      11,
    ]);
  });

  test('#2', () => {
    expect(twoNumberSum([1, 2, 3, 4, 5], 10)).toEqual([]);
  });

  test('3', () => {
    expect(twoNumberSum([4, 6], 10).sort((a, b) => a-b)).toEqual([4, 6]);
  })
  
  test('4', () => {
    expect(twoNumberSum([4, 6, 1], 5).sort((a, b) => a-b)).toEqual([1, 4]);
  })

  test('5', () => {
    expect(twoNumberSum([4, 6, 1, -3], 3).sort((a, b) => a-b)).toEqual([-3, 6]);
  })

  test('6', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10).sort((a, b) => a-b)).toEqual([-1, 11]);
  })

  test('7', () => {
    expect(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17).sort((a, b) => a-b)).toEqual([8, 9]);
  })

  test('8', () => {
    expect(twoNumberSum([1,2,3,4,5,6,7,8,9,15], 18).sort((a, b) => a-b)).toEqual([3, 15]);
  })

  test('9', () => {
    expect(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5).sort((a, b) => a-b)).toEqual([-5, 0]);
  })

  test('10', () => {
    expect(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47,], 163).sort((a, b) => a-b)).toEqual([-47, 210]);
  })

  test('11', () => {
    expect(twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47,], 164).sort((a, b) => a-b)).toEqual([]);
  })

  test('12', () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6,], 15).sort((a, b) => a-b)).toEqual([]);
  })
});

describe('edge cases', () => {
  test('empty array input', () => {
    expect(twoNumberSum([])).toEqual([]);
  });
});
