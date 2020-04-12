const { twoNumberSum }  = require('./twoNumberSum');

describe('base cases', () => {
  test('#1', () => {
    expect(twoNumberSum([3,5,-4,8,11,1,-1,6], 10).sort()).toEqual([-1, 11])
  })

  test.todo('add more tests')
})