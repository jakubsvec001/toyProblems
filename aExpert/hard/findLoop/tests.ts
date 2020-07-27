import LL from './LinkedListClass';

interface iNodes {
  [key: string]: LL;
}

const makeLL = (count:number):iNodes => {
  const test:iNodes = {};
  const root = new LL(0);
  test[0] = root;
  for (let i = 1; i < count; i += 1) {
    test[i] = new LL(i);
    test[i-1].next = test[i];
  }
  return test;
};

const loopTest = makeLL(10);
loopTest[9].next = loopTest[4];

const noLoopTest = makeLL(10);

export { loopTest, noLoopTest };

