const { memoizedGetNthFib } = require('./nthFibonacci');

describe('base case', () => {
  it('1', () => {
    expect(memoizedGetNthFib(0)).toBe(0);
    expect(memoizedGetNthFib(1)).toBe(0);
    expect(memoizedGetNthFib(2)).toBe(1);
  });
  // it("doesn't time out", (done) => {
  //   try {
  //     expect(MemoizedGetNthFib(1000)).toBe(218922995834555200000);
  //     done();
  //   } catch (error) {
  //     done(error)
  //   }
  // })
});
