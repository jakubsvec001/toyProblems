const { findThreeLargestNumbers } = require('./findThreeLargestNumbers');

console.log(findThreeLargestNumbers)
describe('base case', () => {
  test('1', () => {
    expect(findThreeLargestNumbers([5,1,2,4,3])).toEqual([3,4,5]);
  })
  test('2', () => {
    expect(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])).toEqual([ 18, 141, 541 ]);
  })
  test('3', () => {
    expect(findThreeLargestNumbers([10,5,9,10,12])).toEqual([10,10,12]);
  })
})

describe('edge case', () => {
  test('input array length 2', () => {
    expect(findThreeLargestNumbers([5,1])).toEqual([1,5]);
  })
  test('input array length 1', () => {
    expect(findThreeLargestNumbers([5])).toEqual([5]);
  })
  test('input array length 0', () => {
    expect(findThreeLargestNumbers([])).toEqual([]);
  })
})