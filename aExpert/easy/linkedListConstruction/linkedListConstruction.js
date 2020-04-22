/*
Write a doubly-linked list class with a head and a tail
  -methods:
    setHead(node)-
    setTail(node)-
    insertBefore(node, nodeToInsert)-
    insertAfter(node, nodeToInsert)-
    insertAtPosition(position, nodeToInsert)-
    remove(node)-
    removeNodesWithValue(value)-
    containsNodeWithValue(value)-

Write a node class with the parameters: 'previous', 'next', and 'value'
*/

function Node(value) {
  this.value = value;
  this.previous = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.convertToArray = function () {
  // edge case when head is null, tail is null, or both are null
  if (!this.head && !this.tail) {
    return { forward: [], backward: [] };
  } else if (this.head && !this.tail) {
    return { forward: [this.head.value], backward: [this.head.value] };
  } else if (!this.head && this.tail) {
    return { forward: [this.tail.value], backward: [this.tail.value] };
  }
  let result = {};
  let temp = [];
  let context = this.head;
  while (context) {
    temp.push(context.value);
    context = context.next;
  }
  result['forward'] = temp;
  temp = [];
  context = this.tail;
  while (context) {
    temp.push(context.value);
    context = context.previous;
  }
  result['backward'] = temp;
  return result;
};

DoublyLinkedList.prototype.sameNode = function(n1, n2) {
  if (n1.value === n2.value){
    if (n1.left === n2.left) {
      if (n1.right === n2.right){
        return true;
      }
    }
  }
  return false;
}

DoublyLinkedList.prototype.setHead = function (node) {
  if (!this.head && !this.tail) {
    this.head = node;
    // if only one node in LL, head, implicitly set head to tail and new node to head
  } else if (this.head && !this.tail) {
    const temp = this.head;
    this.head = node;
    this.tail = temp;
    this.head.next = this.tail;
    this.tail.previous = this.head;
    // if only one node in LL, tail, implicitly set tail to head and new node to tail
  } else if (!this.head && this.tail) {
    this.head = node;
    this.head.next = this.tail;
    this.tail.previous = this.head;
    // if both head and tail are occupied, default to making new node head and previous head node to the next node in LL
  } else {
    const second = this.head;
    this.head = node;
    this.head.next = second;
    second.previous = this.head;
  }
  return node;
};

DoublyLinkedList.prototype.setTail = function (node) {
  if (!this.head && !this.tail) {
    this.tail = node;
  } else if (this.tail && !this.head) {
    let temp = this.tail;
    this.tail = node;
    this.head = temp;
    this.head.next = this.tail;
    this.tail.previous = this.head;
  } else if (!this.tail && this.head) {
    this.tail = node;
    this.tail.previous = this.head;
    this.head.next = this.tail;
  } else {
    const secondToLast = this.tail;
    this.tail = node;
    this.tail.previous = secondToLast;
    secondToLast.next = this.tail;
  }
  return node;
};

DoublyLinkedList.prototype.insertBefore = function (node, nodeToInsert) {};

DoublyLinkedList.prototype.insertAfter = function (node, nodeToInsert) {};

DoublyLinkedList.prototype.insertAtPosition = function (
  position,
  nodeToInsert,
) {};

DoublyLinkedList.prototype.removeNodesWithValue = function (value) {
  // create context that can be updated
  let context = this.head;
  // while context is not null:
  while (context) {
    // if context.value == value:
    if (context.value === value) {
      // if context is head:
      if (context === this.head) {
        // delete node, reassign pointers, reassign head
        // if next node exists and it is the tail:
        if (context.next && context.next === this.tail) {
          this.head = this.tail;
          this.tail = null;
          this.head.previous = null;
          // else if next node exists and the tail is not next
        } else if (context.next && context.next !== this.tail) {
          this.head = context.next;
          this.head.previous = null;
          // else if there is no next node:
        } else {
          // delete head from DLL
          this.head = null;
          break;
        }
        // do not increment context to next node
        // else if context is tail:
      } else if (context === this.tail) {
        // delete node, reassign pointers, reassign tail
        if (context.previous && context.previous === this.head) {
          this.tail = null;
          break;
        } else {
          this.tail = context.previous;
          this.tail.next = null;
        }
        // else in the middle of DLL:
      } else {
        // delete node, reassign pointers
        context.previous.next = context.next;
        context.next.previous = context.previous;
        // do not increment context to next node
      }
    }
    context = context.next;
  }
  return this;
};

DoublyLinkedList.prototype.remove = function (node) {
  let context = this.head;
  while (context) {
    if (this.sameNode(context, node)) {
      // if context is head, remove head
      if (context === this.head) {
        // delete node, reassign pointers, reassign head
        // if next node exists and it is the tail:
        if (context.next && context.next === this.tail) {
          this.head = this.tail;
          this.tail = null;
          this.head.previous = null;
          // else if next node exists and the tail is not next
        } else if (context.next && context.next !== this.tail) {
          this.head = context.next;
          this.head.previous = null;
          // else if there is no next node:
        } else {
          // delete head from DLL
          this.head = null;
          break;
        }
        // do not increment context to next node
      // else if context is tail:
      } else if (context === this.tail) {
        // delete node, reassign pointers, reassign tail
        if (context.previous && context.previous === this.head) {
          this.head.next = null
          this.tail = null;
          break;
        } else {
          this.tail = context.previous;
          this.tail.next = null;
        }
      // else in the middle of DLL:
      } else {
        // delete node, reassign pointers
        context.previous.next = context.next;
        context.next.previous = context.previous;
        break;
        // do not increment context to next node
      }
      breakFlag = true;
    }
    context = context.next;
  }
  return this;
};

DoublyLinkedList.prototype.containsNodeWithValue = function (value) {
  let context = this.head;
  while (context) {
    if (context.value === value) return true;
    context = context.next;
  }
  return false;
};

const DLL13 = new DoublyLinkedList();
const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);
const sixth = new Node(6);
const seventh = new Node(7);

ll = new DoublyLinkedList();
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)
ll.setHead(node1)
ll.setHead(node2)
ll.setHead(node3)
ll.setHead(node4)
ll.setHead(node5)
ll.remove(node4)
console.log(ll.convertToArray())
ll.remove(node1)
console.log(ll.convertToArray())
console.log(ll.head.value, ll.tail.value)
ll.remove(node5)
console.log(ll.convertToArray())
console.log(ll.head.value, ll.tail.value)
ll.remove(node2)
console.log(ll.convertToArray())
console.log(ll.head.value, ll.tail)
ll.remove(node3)
console.log(ll.convertToArray())
console.log(ll.head, ll.tail)


// DLL13.setHead(first);
// DLL13.insertBefore(first, second);
// console.log(DLL13.convertToArray());
// DLL13.insertBefore(second, third);
// DLL13.insertBefore(third, fourth);
// DLL13.insertBefore(fourth, fifth);
// console.log(DLL13.convertToArray().forward)//.toEqual([5,4,3,2,1]);
// console.log(DLL13.convertToArray().backward)//.toEqual([1,2,3,4,5]);
// DLL13.insertBefore(third, first);
// console.log(DLL13.convertToArray().forward)//.toEqual([5,4,1,3,2]);
// console.log(DLL13.convertToArray().backward)//.toEqual([2,3,1,4,5]);
// DLL13.insertBefore(fifth, second);
// console.log(DLL13.convertToArray().forward)//.toEqual([2,5,4,1,3]);
// console.log(DLL13.convertToArray().backward)//.toEqual([3,1,4,5,2]);
// DLL13.insertBefore(fifth, fourth);
// console.log(DLL13.convertToArray().forward)//.toEqual([2,4,5,1,3]);
// console.log(DLL13.convertToArray().backward)//.toEqual([3,1,5,4,2]);
// DLL13.insertBefore(second, sixth);
// console.log(DLL13.convertToArray().forward)//.toEqual([6,2,4,5,1,3]);
// console.log(DLL13.convertToArray().backward)//.toEqual([3,1,5,4,2,6]);
// DLL13.insertBefore(first, seventh);
// console.log(DLL13.convertToArray().forward)//.toEqual([6,2,4,5,7,1,3]);
// console.log(DLL13.convertToArray().backward)//.toEqual([3,1,7,5,4,2,6]);
// console.log(DLL13.head.value)//.toBe(6);
// console.log(DLL13.tail.value)//.toBe(3);

module.exports = { DoublyLinkedList, Node };
