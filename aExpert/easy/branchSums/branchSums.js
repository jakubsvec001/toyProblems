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
      });
    }
  };
  traverse(this);
  return result;
};


module.exports = { BinaryTree };
