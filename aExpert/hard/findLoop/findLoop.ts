import { loopTest0, loopTest1, noLoopTest } from './tests'
import LL from './LinkedListClass';


const findLoop = (head:LL):LL => {
  let slow:LL = head.next;
  let fast:LL = head.next.next;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = head;
  while (slow !== fast) {
    slow.next;
    fast.next;
  }
  return slow;
}


export default findLoop;