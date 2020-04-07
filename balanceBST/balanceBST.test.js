const { BST } = require('./balanceBST');

let root;

describe('basic BST methods', () => {

  beforeEach(() => {
    root = new BST(3)
    root.add(5)
    root.add(1)
    root.add(3)
    root.add(2)
    root.add(4)
    root.add(7)
    root.add(8)
    root.add(9)
    root.add(10)
    root.add(11)
    return root
  })

  test('Breath first results', () => {
    expect(root.toArray()).toEqual([3,1,2,5,3,4,7,8,9,10,11])
  })

  test('Depth first results', () => {
    expect(root.toArray(false)).toEqual([3,1,5,2,3,7,4,8,9,10,11])
  })
});

describe('.balance edge cases', () => {
  test('', () => {});
});

describe('.balance base cases', () => {
  test('', () => {});
});
