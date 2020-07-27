import { LL } from './findLoop'

interface iNodes {
  [key: string]: LL;
}

const makeLL = (count:number):iNodes => {
  const test:iNodes = {};
  test[0] = new LL(0);
  for (let i = 1; i < count; i += 1) {
    test[i] = new LL(i);
    test[i-1].next = test[i];
  }
  return test;
};

const loopTest = makeLL(10);
loopTest[0] = new LL(0)
loopTest[9].next = loopTest[4];

const noLoopTest = makeLL(10);

export { loopTest, noLoopTest }
