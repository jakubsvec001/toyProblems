const { ListNode, reverseList } = require('./reverseLinkedList')


let one = new ListNode(1);
one.next = new ListNode(2);
one.next.next = new ListNode(3);
one.next.next.next = new ListNode(4)
one.next.next.next.next = new ListNode(5)

test('simple test 3', () => {
  expect(reverseList(one).val).toBe(5)
})

test('simple test 2', () => {
  expect(reverseList(one).next.val).toBe(4)
})

test('simple test 3', () => {
  expect(reverseList(one).next.next.val).toBe(3)
})

test('simple test 4', () => {
  expect(reverseList(one).next.next.next.val).toBe(2)
})

test('simple test 5', () => {
  expect(reverseList(one).next.next.next.next.val).toBe(1)
})