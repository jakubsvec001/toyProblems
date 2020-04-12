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

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    let prevContext;
    let context = this;
    

    return this;
  }
}

const test4 = new BST(10)
  .insert(5)
  .insert(15)
  .insert(22)
  .insert(17)
  .insert(34)
  .insert(7)
  .insert(2)
  .insert(5)
  .insert(1)
  .insert(35)
  .insert(27)
  .insert(16)
  .insert(30)
  .remove(22)
  .remove(17);

const test2 = new BST(10).insert(15).insert(11).insert(22).remove(10);
const test3 = new BST(10).insert(5).insert(7).insert(2).remove(10);

console.log(test3)

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

console.log(inOrderTraverse(test3, []))

// Do not edit the line below.
module.exports = BST;
