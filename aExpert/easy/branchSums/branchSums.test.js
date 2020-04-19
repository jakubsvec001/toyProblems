const { BinaryTree } = require('./branchSums');

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

/*
           1
          /  \
         2    3
        / \  / \ 
      4   5 6   7
    / \  / 
   8  9 10 
*/

const test2 = new BinaryTree(1)

describe('base cases', () => {
  test('0.1', () => {
    expect(test1.branchSums()).toEqual([ 15, 16, 18, 8, 10, 11 ])
  })
})

describe('edge cases', () => {
  it('should return the value of a single node tree', () => {
    expect(test2.branchSums()).toEqual([1]);
  })
})