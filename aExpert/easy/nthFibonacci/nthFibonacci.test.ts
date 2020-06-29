// const { memoizedGetNthFib } = require('./nthFibonacci');
import {memoizedGetNthFib} from './nthFibonacci';

jest.setTimeout(5000);
describe('base case', () => {
  it('1', () => {
    expect(memoizedGetNthFib(0)).toBe(0);
    expect(memoizedGetNthFib(1)).toBe(0);
    expect(memoizedGetNthFib(2)).toBe(1);
  });
  // it("doesn't time out", () => {
  //   try {
  //     expect(memoizedGetNthFib(100)).toBe(218922995834555200000);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, 1000)
});
