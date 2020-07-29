// The depth of a node is its distance from the root. 
// This function takes in a binary tree and return the sum of all of its subtrees' nodes' depths

class BinaryTree {
  value: number;
  left: null|BinaryTree;
  right: null|BinaryTree;
  constructor(value:number){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.left.left.left = new BinaryTree(8);
root.left.left.right = new BinaryTree(9);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);


function nodeDepths (node:BinaryTree, depth:number=0)  {
  if (node === null) return 0;
  return depth + nodeDepths(node.left, depth+1) + nodeDepths(node.right, depth+1)
}

function allKindsOfNodeDepths(root:BinaryTree) {
  if (root === null) return 0;
  return nodeDepths(root) + allKindsOfNodeDepths(root.left) + allKindsOfNodeDepths(root.right);
}


console.log(allKindsOfNodeDepths(root))