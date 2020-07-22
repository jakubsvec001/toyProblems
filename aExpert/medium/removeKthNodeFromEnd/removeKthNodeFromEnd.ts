// Write a function that takes in the head of a Linked List and an integer representing a position from the end of the linked list that is to be removed. Each Linked List input will have at least two nodes, and k will always be within the range of nodes in the linked list.
import { tests, LL } from './tests';


const removeKthNodeFromEnd = (ll:LL, k:number) => {
  // iterate until kth index is found
  let i = 0;
  let context = ll;
  while (i < k && context) {
    context = ll.next;
    i += 1;
  }
}


console.log(removeKthNodeFromEnd(tests[1].input[0], tests[1].input[1]).printArray())
export default removeKthNodeFromEnd;