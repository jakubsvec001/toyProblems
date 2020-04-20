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

DoublyLinkedList.prototype.convertToArray = function () {
  let result = {};
  let temp = [];
  let context = this.head;
  while (context) {
    temp.push(context.value);
    context = context.next;
  }
  result['foreward'] = temp;
  temp = [];
  context = this.tail;
  while (context) {
    temp.push(context.value);
    context = context.previous;
  }
  result['backward'] = temp;
  return result;
};

DoublyLinkedList.prototype.insertBefore = function (node, nodeToInsert) {
  let context = this.head;
  let temp;
  while (context) {
    // if context === node:
    if (context.value === node.value) {
      // if node is head of DLL:
      if (this.head === context) {
        // perform surgery to splice nodeToInsert into head
        nodeToInsert.next = context;
        context.previous = nodeToInsert;
        this.head = nodeToInsert;
        // else
      } else {
        // perform surgery to splice nodeToInsert into DLL
        context.previous.next = nodeToInsert;
        nodeToInsert.previous = context.previous;
        context.previous = nodeToInsert;
        nodeToInsert.next = context;
      }
      // return nodeToInsert
      return nodeToInsert;
    }
    // iterate context to next node
    context = context.next;
  }
  return undefined;
};

const DLL3 = new DoublyLinkedList();
let n0 = DLL3.setHead(new Node(1));
let n1 = DLL3.setTail(new Node(2));
DLL3.insertBefore(n1, new Node(1000));
console.log(DLL3.convertToArray().foreward, DLL3.convertToArray().backward)

DoublyLinkedList.prototype.insertAfter = function (node, nodeToInsert) {
  let context = this.head;
  let temp;
  while (context) {
    // if context === node:
    if (context.value === node.value) {
      // if node is head of DLL:
      if (this.tail === context) {
        // perform surgery to splice nodeToInsert into tail
        nodeToInsert.previous = context;
        context.next = nodeToInsert;
        this.tail = nodeToInsert;
        // else
      } else {
        // perform surgery to splice nodeToInsert into DLL after target node
        context.next.previous = nodeToInsert;
        nodeToInsert.next = context.next;
        context.next = nodeToInsert;
        nodeToInsert.previous = context;
      }
      // return nodeToInsert
      return nodeToInsert;
    }
    // iterate context to next node
    context = context.next;
  }
  return undefined;
};

DoublyLinkedList.prototype.insertAtPosition = function (
  position,
  nodeToInsert,
) {};

DoublyLinkedList.prototype.removeNodesWithValue = function (value) {};

DoublyLinkedList.prototype.remove = function (node) {};

module.exports = { DoublyLinkedList, Node };
