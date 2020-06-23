

//The distance between a node in a Binary Tree and the tree's root is call th enode's depth

//Write a functino that takes in a Binary Tree and returns the sum of its nodes' depths

//Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be Binary Tree nodes themselves or None/null.



const nodeDepths = (root: BinaryTree): number | undefined => {
  let total: number = 0;
  if (!root.value){
    return undefined;
  }
  const traverse = (node: BinaryTree | null, depth: number): void => {
    if (node) {
      depth += 1;
      total += depth;
      [node?.left, node?.right].forEach((item) => {
        traverse(item, depth);
      })
    }
  }
  traverse(root, -1)
  return total
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



module.exports = { nodeDepths, BinaryTree }