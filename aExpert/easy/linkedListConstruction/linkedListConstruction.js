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
  return this;
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

DoublyLinkedList.prototype.insertBefore = function (node, nodeToInsert) {
  let context = this.head;
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

DoublyLinkedList.prototype.insertAfter = function (node, nodeToInsert) {
  let context = this.head;
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
) {
  let context = this.head;
  // if inserting into head:
  if (position === 0) {
    // perform surgery for head of DLL
    context.previous = nodeToInsert;
    nodeToInsert.next = context;
    this.head = nodeToInsert;
    return nodeToInsert;
  }
  // else continue by creating a position counter
  let counter = 1;
  // increment context beyone head
  context = context.next;
  while (context) {
    // if inserting into tail / if (context.next === null && counter+1 === position)
    if (context.next === null && counter + 1 === position) {
      // perform surgery for tail of DLL
      context.next = nodeToInsert;
      nodeToInsert.previous = context;
      this.tail = nodeToInsert;
      return nodeToInsert;
      // else if (counter === position)
    } else if (counter === position) {
      // perform surgery within DLL
      context.previous.next = nodeToInsert;
      nodeToInsert.previous = context.previous;
      context.previous = nodeToInsert;
      nodeToInsert.next = context;
      return nodeToInsert;
    }
    counter += 1;
    context = context.next;
  }
  // return undefined if unsuccessful;
  return undefined;
};

DoublyLinkedList.prototype.removeNodesWithValue = function (value, deleteSingle = false) {
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
          this.head.previous = null
          // else if next node exists and the tail is not next
        } else if (context.next && context.next !== this.tail) {
          this.head = context.next;
          this.head.previous = null;
          // else if there is no next node:
        } else {
          // delete head from DLL
          this.head = null;
          break
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
      if (deleteSingle) break;
    }
    context = context.next;
  }
  return this;
};

DoublyLinkedList.prototype.remove = function (node) {
  return this.removeNodesWithValue(node, true);
};

DoublyLinkedList.prototype.containsNodeWithValue = function (value) {
  let context = this.head;
  while (context) {
    if (context.value === value) return true;
    context = context.next;
  }
  return false;
};

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


module.exports = { DoublyLinkedList, Node };
