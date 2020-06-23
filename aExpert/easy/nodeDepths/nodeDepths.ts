

//The distance between a node in a Binary Tree and the tree's root is call th enode's depth

//Write a functino that takes in a Binary Tree and returns the sum of its nodes' depths

//Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be Binary Tree nodes themselves or None/null.



const nodeDepths = (root: BinaryTree): number => {
  let total: number = 0;
  const traverse = (node: BinaryTree | null, depth: number): void => {
    if (!node) {
      total += depth;
    }
    depth += 1;
    traverse(node!.left, depth);
    traverse(node!.right, depth);
  }
  return 1;
}



class BinaryTree {
  public value: number;
  public left: this | null;
  public right: this | null;
  public constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node1 = new BinaryTree(1);
node1.left = new BinaryTree(2);
node1.right = new BinaryTree(3);
node1.left.left = new BinaryTree(4);
node1.left.right = new BinaryTree(5);
node1.left.left.left = new BinaryTree(8);
node1.left.left.right = new BinaryTree(9);
node1.right.left = new BinaryTree(6);
node1.right.right = new BinaryTree(7);

console.log(nodeDepths(node1));

module.exports = { nodeDepths, BinaryTree }