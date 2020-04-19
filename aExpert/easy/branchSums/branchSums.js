/**
 * Write a function that takes in a Binary Tree and treturn a list of its branch sums ordered from leftmost branch sum to righmost branch sum. 
 * A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at the leaf node.
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTree.prototype.branchSums = function () {
  // create result array
  const result = [];
  // define recursive traversal (depth first search, leftward tendancy, O(n))
  const traverse = (node, currentTotal = 0) => {
    currentTotal += node.value;
    if (!node.left && !node.right) {
      result.push(currentTotal)
    } else {
      [node.left, node.right].forEach((child) => {
      if (child) traverse(child, currentTotal);
      else result.push(currentTotal);
      });
    }
  };
  traverse(this);
  return result;
};

const test1 = new BinaryTree(1);
test1.left = new BinaryTree(2);
test1.right = new BinaryTree(3);
test1.left.left = new BinaryTree(4);
test1.left.right = new BinaryTree(5);
test1.right.left = new BinaryTree(6);
test1.right.right = new BinaryTree(7);
test1.left.left.left = new BinaryTree(8);
test1.left.left.right = new BinaryTree(9);
test1.left.right.left = new BinaryTree(10);

console.log(test1.branchSums())

module.exports = { BinaryTree };
