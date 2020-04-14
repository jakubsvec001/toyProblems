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
    // test if root node is only node, if so, return root node

    // traverse tree and find the target value
      //if found:
        // if node to the left of target, traverse left first:

        // else if node to left doesn't exist and node to right does):

        // else:
          // it is a leaf, so simply remove node
    // if fully traversed and target value not found, return root node
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
