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

DoublyLinkedList.prototype.convertToArray = function(){
  let result = {}
  let temp = [];
  let context = this.head;
  while (context) {
    temp.push(context.value)
    context = context.next;
  }
  result['foreward'] = temp;
  temp = []
  context = this.tail;
  while (context) {
    temp.push(context.value)
    context = context.previous;
  }
  result['backward'] = temp;
  return result
} 

DoublyLinkedList.prototype.insertBefore = function (node, nodeToInsert) {
  let context = this.head;
  while (context) {
    // if context = node:
      // if node is head of DLL:
        // perform surgery to splice nodeToInsert into head
      
      // else 
        // perform surgery to splice nodeToInsert into DLL

      // return nodeToInsert
};

DoublyLinkedList.prototype.insertAfter = function (node, nodeToInsert) {
  let context = this.head;
  while (context) {
    // if context = node:
      // if node is tail of DLL:
        // perform surgery to splice nodeToInsert into tail
      
      // else 
        // perform surgery to splice nodeToInsert into DLL

      // return nodeToInsert
};

DoublyLinkedList.prototype.insertAtPosition = function (position, nodeToInsert) {
  
};

DoublyLinkedList.prototype.removeNodesWithValue = function (value) {};

DoublyLinkedList.prototype.remove = function (node) {};

module.exports = { DoublyLinkedList, Node };
