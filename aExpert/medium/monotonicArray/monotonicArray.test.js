const { monotonicArray } = require('./monotonicArray');


describe('base case', () => {
  it('1', () => {
    expect(monotonicArray([1,2,3,4])).toBe(true)
  })
  it('2', () => {
    expect(monotonicArray([1,2,5,4])).toBe(false)
  })
  it('3', () => {

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