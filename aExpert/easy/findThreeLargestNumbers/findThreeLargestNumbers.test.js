const { findThreeLargestNumbers } = require('./findThreeLargestNumbers');

console.log(findThreeLargestNumbers)
describe('base case', () => {
  test('1', () => {
    expect(findThreeLargestNumbers([5,1,2,4,3])).toEqual([3,4,5]);
  })
  test.skip('2', () => {
    expect(findThreeLargestNumbers([])).toEqual([]);
  })
  test.skip('3', () => {
    expect(findThreeLargestNumbers([])).toEqual([]);
  })
  test.skip('4', () => {
    expect(findThreeLargestNumbers([])).toEqual([]);
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
  test.skip('', () => {
    
  })
  test.skip('', () => {
    
  })
  test.skip('', () => {
    
  })
})