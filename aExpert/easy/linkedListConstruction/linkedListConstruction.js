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

DoublyLinkedList.prototype.insertAtPosition = function (position, nodeToInsert) {

};

DoublyLinkedList.prototype.removeNodesWithValue = function (value, deleteSingle = false) {};

DoublyLinkedList.prototype.remove = function (node) {

};

DoublyLinkedList.prototype.containsNodeWithValue = function (value) {
  
};

const DLL13 = new DoublyLinkedList();
const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);
const sixth = new Node(6);
const seventh = new Node(7);

DLL13.setHead(first);
DLL13.insertBefore(first, second);
console.log(DLL13.convertToArray());
DLL13.insertBefore(second, third);
DLL13.insertBefore(third, fourth);
DLL13.insertBefore(fourth, fifth);
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
