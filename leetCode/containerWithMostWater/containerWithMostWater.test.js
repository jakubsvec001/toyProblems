const { containerWithMostWater, getArea } = require('./containerWithMostWater');

describe('base cases', () => {
  it('1', () => {
    const test1 = {
      Input: [1,8,6,2,5,4,8,3,7],
      Output: 49,
    }
    expect(containerWithMostWater(test1.Input)).toBe(test1.Output);
  });
  it('2 getArea() gets correct area', () => {
    expect(getArea([1,8,6,2,5,4,8,3,7], 0, 8)).toBe(8)
    expect(getArea([1,8,6,2,5,4,8,3,7], 1, 8)).toBe(49)
  });
  it('3', () => {

  });
});
