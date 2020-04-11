/*
*Write a function that takes in a Binary Search Tree and a target integer value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themeslves or None / null.
*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

}


/**
 * 
 * @param {*} target 
 */
function findClosestValueInBst(tree, target) {
  let nearest = tree.value;
  let minAbsDiff = Math.abs(nearest - target);
  let absDiff;
  const traverse = (node) => {
    absDiff = Math.abs(target - node.value)
    if (absDiff < minAbsDiff) {
      nearest = node.value;
      minAbsDiff = absDiff;
    }
    if (target < node.value && node.left !== null) {
      traverse(node.left)
    } else if (target >= node.value && node.right !== null) {
      traverse(node.right);
    }
  }
  traverse(tree);
  return nearest;
}

const tree = new BST(100)
.insert(5)
.insert(15)
.insert(5)
.insert(2)
.insert(1)
.insert(22)
.insert(1)
.insert(1)
.insert(3)
.insert(1)
.insert(1)
.insert(502)
.insert(55000)
.insert(204)
.insert(205)
.insert(207)
.insert(206)
.insert(208)
.insert(203)
.insert(-51)
.insert(-403)
.insert(1001)
.insert(57)
.insert(60)
.insert(4500);

console.log(findClosestValueInBst(tree, -400))

module.exports = { BST, findClosestValueInBst }