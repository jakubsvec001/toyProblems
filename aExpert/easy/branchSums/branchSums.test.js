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

const test3 = new BinaryTree(0);
test3.left = new BinaryTree(9);
test3.right = new BinaryTree(1);
test3.right.left = new BinaryTree(15);
test3.right.right = new BinaryTree(10);
test3.right.right.left = new BinaryTree(100);
test3.right.right.right = new BinaryTree(200)

const test4 = new BinaryTree(0);
test4.right = new BinaryTree(1)
test4.right.right = new BinaryTree(10)
test4.right.right.right = new BinaryTree(100)

const test5 = new BinaryTree(0);
test5.right = new BinaryTree(1)
test5.right.right = new BinaryTree(10)
test5.right.right.right = new BinaryTree(100)
test5.right.left = new BinaryTree(5)
test5.right.left.left = new BinaryTree(2)
test5.right.left.right = new BinaryTree(1000)
test5.right.left.right.right = new BinaryTree(10000)


describe('base cases', () => {
  test('0.1', () => {
    expect(test1.branchSums()).toEqual([ 15, 16, 18, 10, 11 ])
  })

  test('0.2', () => {
    expect(test3.branchSums()).toEqual([ 9, 16, 111, 211 ])
  })

  it('0.3', () => {
    expect(test4.branchSums()).toEqual([111])
  })

  it('0.4', () => {
    expect(test5.branchSums()).toEqual([ 8, 11006, 111 ])
  })
})


describe('edge cases', () => {
  it('should return the value of a single node tree', () => {
    expect(test2.branchSums()).toEqual([1]);
  })
})