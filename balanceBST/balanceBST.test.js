const { BST, insertionSort } = require('./balanceBST');

describe('insertionSort inserting properly', () => {
  test('correctly inserts at beginning ', () => {
    expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test('correctly inserts at the end of sorted array and breaks', () => {
    expect(insertionSort([3, 2, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  test('mostly sorted, single insert', () => {
    expect(insertionSort([1, 2, 3, 4, 6, 5, 7, 8, 9])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });

  test('unsorted, multiple insert', () => {
    expect(insertionSort([2, 9, 6, 8, 7, 5, 4, 3, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
});

let root;

describe('basic BST methods', () => {
  beforeEach(() => {
    root = new BST(5);
    root.add(1);
    root.add(3);
    root.add(2);
    root.add(4);
    root.add(10);
    root.add(8);
    root.add(7);
    root.add(9);
    root.add(6);
    return root;
  });

  test('Depth first results', () => {
    expect(root.toArray(true)).toEqual([5, 1, 3, 2, 4, 10, 8, 7, 6, 9]);
  });

  test('Bredth first results', () => {
    expect(root.toArray(false)).toEqual([5, 1, 10, 3, 8, 2, 4, 7, 9, 6]);
  });
});

describe('BST balance method edge cases', () => {
  test('only one node in tree', () => {
    expect(new BST(5).toArray()).toEqual([5]);
  });
});

describe('BST balance method base cases', () => {
  test('correctly returns a new BST that is balanced', () => {
    expect(root.balance().toArray()).toEqual([5, 2, 8, 1, 3, 6, 9, 4, 7, 10]);
  });
});

describe('BST unbalanced method tests', () => {
  test('unbalanced tree', () => {
    expect(root.isUnbalanced()).toBe(True);
  });
  test('balanced tree', () => {
    expect(root.balance().isUnbalanced()).toBe(False);
  });
});

describe('BST .depth() method tests', () => {
  test('correctly returns maximum depth of BST tree', () => {
    expect(root.depth()).toBe(4);
  });
  test('correctly returns maximum depth of BST tree', () => {
    expect(root.balance().depth()).toBe(3);
  });
});

