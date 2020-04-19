const { monotonicArray } = require('./monotonicArray');


describe('base case', () => {
  it('1', () => {
    expect(monotonicArray([1,2,3,4])).toBe(true)
    expect(monotonicArray([3,2,1])).toBe(true)
    expect(monotonicArray([300, 200, 100])).toBe(true)
    expect(monotonicArray([1,1,2,3,4,5,5,5,6,7,8,8,9,10,11])).toBe(true)
  })
  it('2', () => {
    expect(monotonicArray([1,2,5,4])).toBe(false)
    expect(monotonicArray([300, -1, 3, 1000])).toBe(false)
    expect(monotonicArray([-1,-1,-2,-3,-4,-5,-5,-5,-6,-7,-8,-8,-9,-10,-11])).toBe(false)
  })
})

describe('edge case', () => {
  it('inputArray length less than 3, 2 inputs', () => {
    expect(monotonicArray([1,2])).toBe(true)
  })
  it('inputArray length less than 3, 1 input', () => {
    expect(monotonicArray([1])).toBe(false)
  })
})