const { BinaryTree, nodeDepths } = require('./nodeDepths');

console.log(BinaryTree)

describe('base case', () => {
  const node1 = new BinaryTree(1);
  node1.left = new BinaryTree(2);
  node1.right = new BinaryTree(3);
  node1.left.left = new BinaryTree(4);
  node1.left.right = new BinaryTree(5);
  node1.left.left.left = new BinaryTree(8);
  node1.left.left.right = new BinaryTree(9);
  node1.right.left = new BinaryTree(6);
  node1.right.right = new BinaryTree(7);

  it('simple tree', () => {
    expect(nodeDepths(node1)).toBe(16);
  })
})

describe('edge case', () => {
  it('bad input', () => {
    expect(nodeDepths(0)).toBe(undefined)
  } )
})