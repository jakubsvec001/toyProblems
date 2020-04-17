/**
 * Write a function that takes in a Binary Tree and treturn a list of its branch sums ordered from leftmost branch sum to righmost branch sum. 
 * A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at the leaf node.
 */

function binaryTree (value) {
  this.val = value;
  this.left = null;
  this.right = null;
}

binaryTree.prototype.branchSums = function() {
  console.log(this.val)
}

const bt = new binaryTree(3)

console.log(bt.branchSums())

module.exports = { binaryTree };