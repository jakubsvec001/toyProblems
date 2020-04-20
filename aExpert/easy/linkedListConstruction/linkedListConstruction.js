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
  this.previous;
  this.next;
}

function DoublyLinkedList () {
  this.head = null;
  this.tail = null;
}

DoublyLinkedList.prototype.setHead = function(node) {
  if (this.head) {
    this.head.previous = node
  } 
  this.head = node;
}

DoublyLinkedList.prototype.setTail = function(node) {
  if (this.tail) {
    this.tail.next = node;
  }
  this.tail = node;
}

DoublyLinkedList.prototype.insertBefore = function(node, nodeToInsert) {

}

DoublyLinkedList.prototype.insertAfter = function(node, nodeToInsert) {
  
}

DoublyLinkedList.prototype.insertAtPosition = function(position, nodeToInsert) {
  
}

DoublyLinkedList.prototype.removeNodesWithValue = function(value) {
  
}

DoublyLinkedList.prototype.remove = function(node) {
  
}


let DLL = new DoublyLinkedList()
DLL.setHead(new Node(1))
DLL.setTail(new Node(2))

console.log(DLL)

module.exports = { DoublyLinkedList, Node };