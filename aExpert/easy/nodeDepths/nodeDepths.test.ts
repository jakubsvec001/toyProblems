export {};

const { BinaryTree, nodeDepths } = require('./nodeDepths');


describe('base case', () => {
  const tree1 = new BinaryTree(1);
  tree1.left = new BinaryTree(2);
  tree1.right = new BinaryTree(3);
  tree1.left.left = new BinaryTree(4);
  tree1.left.right = new BinaryTree(5);
  tree1.left.left.left = new BinaryTree(8);
  tree1.left.left.right = new BinaryTree(9);
  tree1.right.left = new BinaryTree(6);
  tree1.right.right = new BinaryTree(7);

  it('simple tree', () => {
    expect(nodeDepths(tree1)).toBe(16);
  });
  it('only root node in tree', ()=> {
    const tree2 = new BinaryTree(1);
    expect(nodeDepths(tree2)).toBe(0)
  })
})

describe('edge case', () => {
  it('bad input', () => {
    expect(nodeDepths('string')).toBe(undefined)
  } )
})