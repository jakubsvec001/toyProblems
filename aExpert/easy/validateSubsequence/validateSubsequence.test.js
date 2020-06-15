const { validateSubsequence } = require('./validateSubsequence');

describe('base case', () => {
  let array1;
  let array2;
  array1 = [5,1,22,25,6,-1,8,10];
  array2 = [1,6,-1,10];
  const result = true
  test('1', () => {
    expect(validateSubsequence(array1, array2)).toBe(true);
  });
  array3 = [5,1,22,25,6,-1,8,10];
  array4 = [1,22,6,-1,25]
  test('2', () => {
    expect(validateSubsequence(array3, array4)).toBe(false);
  });
  array5 = [5,1,22,25,6,-1,8,10];
  array6 = [1]
  test('3', () => {
    expect(validateSubsequence(array5, array6)).toBe(true);
  });
})