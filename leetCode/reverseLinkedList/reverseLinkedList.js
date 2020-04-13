/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
 */


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null,
      next = null,
      curr = head;
  while(curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev
};


// pseuodcode
/**
 * create variable:
 * oldHead = head;
 * newHead;
 * newNode
 * create while loop, break when oldHead.next !== null
 * * create a new LL node with oldHead's value
 * * if newHead is undefined:
 * * * assign newNode to newHead variable
 * * else
 * * * point the newNode to the head of the newHead
 * * * assign newHead to the newNode
 * * increment oldHead
 */

let one = new ListNode(1);
one.next = new ListNode(2);
one.next.next = new ListNode(3);
one.next.next.next = new ListNode(4)
one.next.next.next.next = new ListNode(5)

console.log(reverseList(one))
console.log(reverseList([]))
console.log(reverseList())

module.exports = { ListNode, reverseList };


// Input: 1->2->3->4->5->NULL
//                         ^
// LL(1) -> null
// LL(2) -> LL(1)
// LL(3) -> LL(2)
// LL(4) -> LL(3)
// LL(5) -> LL(4)

// Output: 5->4->3->2->1->NULL
//         ^