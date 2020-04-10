/**
 * 
 * Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
 */

function LinkedList(val) {
  this.value = val
  this.next = null
}

LinkedList.prototype.add = function(val){
  this.next = new LinkedList(val);
  return this.next;
}

LinkedList.prototype.toArray = function(){
  const res = [];
  let context = this;
  res.push(context.value)
  while (context.next) {
    res.push(context.next.value)
    context = context.next
  }
  return res;
}

LinkedList.prototype.deleteNext = function(){
  this.next = this.next.next;
}


/**
 * Removes the nth element from the end of a LinkedList object
 * There are three (3) major considerations:
 * 1- what if there is only one node in the LL and and n = 0 (return null)
 * 2- what if there are more than nodes in the LL and n = length of the LL (delete the head, return the remaining LL)
 * 3- what if n is greater than the length of the LL (return LL)
 * @param {LinkedList} head - head of LL
 * @param {integer} n - number from end of LL
 * @returns {LinkedList}
 */

const removeNthFromEnd = (head, n) => {
  // edge case: n is undefined
  if (n === undefined) return head
  // edge case: head the only node in LL
  if (head.next === null && n===1){
    return null;
  }
  if (head.next === null && n>1){
    return head;
  }
  let leading = head;
  for (let i=0; i<n; i+=1) {
    leading = leading.next;
    if (leading === null && i < n-1) return head;
  }
  // if leading pointer at the end of LL, remove head
  if (leading === null) return head.next;
  let trailing = head;
  while (leading.next){
    trailing = trailing.next
    leading = leading.next
  }
  // if trailing is at end of LL, remove tail
  if (trailing.next.next === undefined) trailing.next = null;
  // otherwise, simple case of stitching node to node.next.next to remove node.next:
  else (trailing.next = trailing.next.next)
  return head
}

const m0 = new LinkedList(0);
const m1 = m0.add(1);
const m2 = m1.add(2);
const m3 = m2.add(3);
const m4 = m3.add(4);
const m5 = m4.add(5);
const res1 = removeNthFromEnd(m0, 6);



module.exports = { removeNthFromEnd, LinkedList };