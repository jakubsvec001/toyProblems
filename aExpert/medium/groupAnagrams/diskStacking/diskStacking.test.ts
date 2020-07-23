import diskStacking, { isLarger, totalHeight } from './diskStacking';

describe('diskStacking', () => {
  it('1', () => {
    expect(diskStacking([[2,1,2], [3,2,3], [2,2,8], [2,3,4], [1,3,1], [4,4,5]])).toEqual([[2,1,2], [3,2,3], [4,4,5]])
  });
  it('2', () => {
    expect(diskStacking([[2,1,2], [3,2,3], [2,2,8], [2,3,4], [1,3,20], [4,4,5]])).toEqual([[1,3,20]])
  });
  it('3', () => {
    expect(diskStacking([[2, 1, 2], [3, 2, 3], [2, 2, 8]])).toEqual([[2,2,8]])
  })
})


describe('isLarger', () => {
  it('1', () => {
    expect(isLarger([3,3,3], [4,4,4])).toBe(true);
  });
  it('2', () => {
    expect(isLarger([3,3,3], [4,4,3])).toBe(false);
  })
})

describe('totalHeight', () => {
  it('1', () => {
    expect(totalHeight([[66,66,1], [77,77,2], [88,88,3], [99,99,4]])).toBe(10);
  })
})

// [[2,2,1], [2,1,2], [3,2,3], [2,3,4], [4,4,5], [2,2,8]]