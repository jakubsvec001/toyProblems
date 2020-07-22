// Write a function that takes in the head of a Linked List and an integer representing a position from the end of the linked list that is to be removed. Each Linked List input will have at least two nodes, and k will always be within the range of nodes in the linked list.
import ll, { one } from './tests';

const copy1 = Object.assign({}, one);
copy1.next.next.next = null;
const copy2 = Object.assign({}, one);
copy2.next.next.

const removeKthNodeFromEnd = (ll, k) => {
  let i = ll;
  let j = ll.next;
}

console.log(removeKthNodeFromEnd(ll,
   0))
export default removeKthNodeFromEnd;