import findLoop, { LL } from './findLoop'
import { loopTest, noLoopTest } from './tests';


describe('findLoop', () => {
  it('0', () => {
    expect(findLoop(loopTest[0])!.printArray()).toEqual([4,5,6,7,8,9]);
  });
  it('1', () => {
    expect(findLoop(noLoopTest[0])).toBeNull();
  })
})