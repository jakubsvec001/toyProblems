import { loopTest, noLoopTest } from './tests'
import LL from './LinkedListClass';


const findLoop = (head:LL):LL|null => {
  interface iParents {
    [key: string]: number|string;
  }
  const parents:iParents = {};
  parents[head.value] = 'root'
  let context:LL = head;
  while (true) {
    if (context.next === null) {
      return null;
    }
    if (parents[context.next.value]) {
      let loopHead = context.next;
      context.next = null;
      return loopHead;
    }
    parents[context.next.value] = context.value;
    context = context.next;
  }
}


export default findLoop;