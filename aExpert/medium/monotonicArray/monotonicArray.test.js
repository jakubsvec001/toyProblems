const { monotonicArray } = require('./monotonicArray');


describe('base case', () => {
  it('1', () => {
    expect(monotonicArray([1,2,3,4])).toBe(true)    
  })
  it('2', () => {
    expect(monotonicArray([1,1,2,3,4,5,5,5,6,7,8,8,9,10,11])).toBe(true)
  })
  it('4', () => {
    expect(monotonicArray([3,2,1])).toBe(true)
  })
  it('5', () => {
    expect(monotonicArray([300, 200, 100])).toBe(true)
  })
  it('6', () => {
    expect(monotonicArray([1,2,5,4])).toBe(false)
  })
  it('7', () => {
    expect(monotonicArray([300, -1, 3, 1000])).toBe(false)
  })
  it('8', () => {
    expect(monotonicArray([-1,-1,-2,-3,-4,-5,-5,-5,-6,-7,-8,-8,-9,-10,-11])).toBe(true)
  })
})

describe('edge case', () => {
  it('inputArray length less than 3, 2 inputs', () => {
    expect(monotonicArray([1,2])).toBe(true)
  })
  it('inputArray length less than 3, 1 input', () => {
    expect(monotonicArray([1])).toBe(true)
  })
  it('inputArray length less than 3, 0 input', () => {
    expect(monotonicArray([])).toBe(true)
  })
})