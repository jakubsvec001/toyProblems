import subarraySort from './subarraySort'

describe('subarraySort', () => {
  it('1', () => {
    expect(subarraySort([1,2,4,7,10,11,7,12,6,7,16,18,19])).toEqual([3,9])
  });
  it('2', () => {
    expect(subarraySort([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89])).toEqual([-1, -1])
  })
})