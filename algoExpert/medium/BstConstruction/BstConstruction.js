// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let context = this;
    let nodeVal;
    while (true) {
      nodeVal = context.value;
      if (value < nodeVal) {
        if (context.left === null) {
          context.left = new BST(value);
          break;
        } else {
          context = context.left;
        }
      } else {
        if (context.right === null) {
          context.right = new BST(value);
          break;
        } else {
          context = context.right;
        }
      }
    }
    return this;
  }

  contains(value) {
    // Write your code here.
    let context = this;
    while (context) {
      if (value === context.value) return true;
      else if (value < context.value) context = context.left;
      else context = context.right;
    }
    return false;
  }

  remove(target) {
    // test if root node is only node, if so, return root node
    if (this.left === null && this.right === null) return this;
    // traverse tree and find the target value
    let toReplace;
    let previous;
    let previousDirection;
    let context = this;
    while (context) {
      //if found:
      if (context.value === target) {
        // if context doesn't have children:
        if (!context.left && !context.right) {
          previous[previousDirection] = null;
        }
        // if context has left child
        else if (context.right) {
          toReplace = context._findReplacement('right');
          context.value = toReplace
          return this;
        // if context has right child
        } else {
          toReplace = context._findReplacement('left');
          context.value = toReplace;
          return this;
        }
      }
      previous = context;
      if (target < context.value && context.left) {
        context = context.left;
        previousDirection = 'left';
      } else if (context.right) {
        context = context.right;
        previousDirection = 'right';
      }
    }
    return this;
  }
  
  _findReplacement(direction) {
    if (!direction === 'left' || !direction === 'right' ) throw 'improper input, must be direction parameter must be left or right';
    const opposite = direction === 'left' ? 'right' : 'left';
    let previous = this;
    // move once in provided direction
    let context = this[direction];
    // if leaf node:
    if (context[opposite] === null) {
      previous[direction] = context[direction];
      return context.value;
    }
    previous = context;
    context = context[opposite];
    while (context) {
      if (context[opposite] === null) {
        previous[opposite] = context[direction];
        return context.value;
      } 
      previous = context;
      context = context[opposite];
    }
  }
}

const test5 = new BST(10).insert(15).insert(11).insert(22).insert(5).insert(7).insert(2).remove(10);

console.log(test4.right.right.left.value)
console.log(test4.right.right.value)
// const test2 = new BST(10).insert(15).insert(11).insert(22).remove(10);
// const test3 = new BST(10).insert(5).insert(7).insert(2).remove(10);



function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}


// Do not edit the line below.
module.exports = BST;
