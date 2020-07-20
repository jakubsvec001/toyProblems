import hasSingleCycle from './singleCycleCheck';
import { move, every } from './singleCycleCheck';

describe('hasSingleCycle', () => {
  it('1', () => {
    expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).toBe(true);
  });
});

describe('move', () => {
  it('1', () => {
    expect(move([1,2,3,4], 2, -3)).toBe(3);
  });
  it('2', ()=> {
    expect(move([1,2,3,4], 2, 5)).toBe(3)
  });
  it('3', () => {
    expect(move([1,2,3,4], 2, -4)).toBe(2);
  });
  it('4', () => {
    expect(move([1,2,3,4], 2, -8)).toBe(2);
  });
  it('5', () => {
    expect(move([1,2,3,4], 2, -10)).toBe(0);
  });
  it('6', () => {
    expect(move([1,2,3,4], 2, 10)).toBe(0);
  });
});

describe('every', () => {
  it('1', () => {
    expect(every([false, false, false])).toBe(false);
  }),
  it('2', () => {
    expect(every([false, true, false])).toBe(false);
  }),
  it('3', () => {
    expect(every([true, true, true])).toBe(true);
  });
})