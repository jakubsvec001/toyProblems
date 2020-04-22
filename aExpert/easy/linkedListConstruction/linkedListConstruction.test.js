const { DoublyLinkedList, Node } = require('./linkedListConstruction');

let expected;
let output;

describe('setHead()', () => {
  const DLL1 = new DoublyLinkedList();
  DLL1.setHead(new Node(1));
  DLL1.setHead(new Node(2));
  DLL1.setHead(new Node(3));
  it('1', () => {
    expect(DLL1.convertToArray().forward).toEqual([3, 2, 1]);
    expect(DLL1.convertToArray().backward).toEqual([1, 2, 3]);
  });
  it('2', () => {
    expect(DLL1.head.value).toBe(3);
  });
});
describe('setTail()', () => {
  const DLL2 = new DoublyLinkedList();
  DLL2.setTail(new Node(1));
  DLL2.setTail(new Node(2));
  DLL2.setTail(new Node(3));
  it('1', () => {
    expect(DLL2.convertToArray().forward).toEqual([1, 2, 3]);
    expect(DLL2.convertToArray().backward).toEqual([3, 2, 1]);
  });
  it('2', () => {
    expect(DLL2.tail.value).toBe(3);
  });
});
describe('insertBefore()', () => {
  const DLL3 = new DoublyLinkedList();
  let n0 = DLL3.setHead(new Node(1));
  let n1 = DLL3.setTail(new Node(2));
  DLL3.insertBefore(n1, new Node(1000));
  it('inserts in between 2 nodes', () => {
    expected = DLL3.convertToArray();
    expect(expected.forward).toEqual([1, 1000, 2]);
    expect(expected.backward).toEqual([2, 1000, 1]);
  });
  it('inserts into head', () => {
    DLL3.insertBefore(n0, new Node(99));
    expected = DLL3.convertToArray();
    expect(expected.forward).toEqual([99, 1, 1000, 2]);
    expect(expected.backward).toEqual([2, 1000, 1, 99]);
    expect(DLL3.head.value).toBe(99);
  });
  it('should insertBefore() properly', () => {
    const DLL13 = new DoublyLinkedList();
    const first = new Node(1);
    const second = new Node(2);
    const third = new Node(3);
    const fourth = new Node(4);
    const fifth = new Node(5);
    const sixth = new Node(6);
    const seventh = new Node(7);

    DLL13.setHead(first);
    DLL13.insertBefore(first, second);
    DLL13.insertBefore(second, third);
    DLL13.insertBefore(third, fourth);
    DLL13.insertBefore(fourth, fifth);
    expect(DLL13.convertToArray().forward).toEqual([5,4,3,2,1]);
    expect(DLL13.convertToArray().backward).toEqual([1,2,3,4,5]);
    DLL13.insertBefore(third, first);
    expect(DLL13.convertToArray().forward).toEqual([5,4,1,3,2]);
    expect(DLL13.convertToArray().backward).toEqual([2,3,1,4,5]);
    DLL13.insertBefore(fifth, second);
    expect(DLL13.convertToArray().forward).toEqual([2,5,4,1,3]);
    expect(DLL13.convertToArray().backward).toEqual([3,1,4,5,2]);
    DLL13.insertBefore(fifth, fourth);
    expect(DLL13.convertToArray().forward).toEqual([2,4,5,1,3]);
    expect(DLL13.convertToArray().backward).toEqual([3,1,5,4,2]);
    DLL13.insertBefore(second, sixth);
    expect(DLL13.convertToArray().forward).toEqual([6,2,4,5,1,3]);
    expect(DLL13.convertToArray().backward).toEqual([3,1,5,4,2,6]);
    DLL13.insertBefore(first, seventh);
    expect(DLL13.convertToArray().forward).toEqual([6,2,4,5,7,1,3]);
    expect(DLL13.convertToArray().backward).toEqual([3,1,7,5,4,2,6]);
    expect(DLL13.head.value).toBe(6);
    expect(DLL13.tail.value).toBe(3);
  })
});
describe('insertAfter()', () => {
  const DLL7 = new DoublyLinkedList();
  let q0 = DLL7.setHead(new Node(1));
  let q1 = DLL7.setTail(new Node(2));
  DLL7.insertBefore(q1, new Node(1000));
  DLL7.insertBefore(q0, new Node(99));
  //   99 - 1 - 1000 - 2
  it('inserts into the middle of multiple nodes', () => {
    DLL7.insertAfter(q0, new Node(5));
    expected = DLL7.convertToArray();
    expect(expected.forward).toEqual([99, 1, 5, 1000, 2]);
    expect(expected.backward).toEqual([2, 1000, 5, 1, 99]);
  });
  it('inserts into the tail, if desired', () => {
    output = DLL7.insertAfter(q1, new Node(555));
    expected = DLL7.convertToArray();
    expect(expected.forward).toEqual([99, 1, 5, 1000, 2, 555]);
    expect(expected.backward).toEqual([555, 2, 1000, 5, 1, 99]);
  });
  it('returns undefined if unable to insert', () => {
    output = DLL7.insertBefore(new Node(2222), new Node(100));
    expected = DLL7.convertToArray();
    expect(expected.forward).toEqual([99, 1, 5, 1000, 2, 555]);
    expect(expected.backward).toEqual([555, 2, 1000, 5, 1, 99]);
    expect(DLL7.head.value).toBe(99);
    expect(output).toBeUndefined();
  });
  it('nodeToInsert already exists, re-position exiting node into head', () => {
    expect().toBe('todo');
    // DLL3.insertBefore(n0, new Node(99));
    // expected = DLL3.convertToArray();
    // expect(expected.forward).toEqual([99, 1, 1000, 2]);
    // expect(expected.backward).toEqual([2, 1000, 1, 99]);
    // expect(DLL3.head.value).toBe(99);
  });
  it('nodeToInsert already exists, re-position exiting node into LL body', () => {
    expect().toBe('todo');
    // DLL3.insertBefore(n0, new Node(99));
    // expected = DLL3.convertToArray();
    // expect(expected.forward).toEqual([99, 1, 1000, 2]);
    // expect(expected.backward).toEqual([2, 1000, 1, 99]);
    // expect(DLL3.head.value).toBe(99);
  });
});
describe('insertAtPosition()', () => {
  const DLL4 = new DoublyLinkedList();
  let m0 = DLL4.setHead(new Node(1));
  let m1 = DLL4.setTail(new Node(2));
  let m2 = DLL4.setTail(new Node(3));
  it('inserts into second position', () => {
    DLL4.insertAtPosition(2, new Node(200));
    expected = DLL4.convertToArray();
    expect(expected.forward).toEqual([1, 2, 200, 3]);
    expect(expected.backward).toEqual([3, 200, 2, 1]);
  });
  it('inserts into first position', () => {
    DLL4.insertAtPosition(0, new Node(0));
    expected = DLL4.convertToArray();
    expect(expected.forward).toEqual([0, 1, 2, 200, 3]);
    expect(expected.backward).toEqual([3, 200, 2, 1, 0]);
  });
  it('inserts into past position', () => {
    DLL4.insertAtPosition(5, new Node(999));
    expected = DLL4.convertToArray();
    expect(expected.forward).toEqual([0, 1, 2, 200, 3, 999]);
    expect(expected.backward).toEqual([999, 3, 200, 2, 1, 0]);
  });
  it('Edge case - cannot insert, position out of bounds, returns undefined', () => {
    output = DLL4.insertAtPosition(7, new Node(3000));
    expected = DLL4.convertToArray();
    expect(expected.forward).toEqual([0, 1, 2, 200, 3, 999]);
    expect(expected.backward).toEqual([999, 3, 200, 2, 1, 0]);
    expect(output).toBeUndefined();
  });
});
describe('removeNodesWithValue()', () => {
  const DLL5 = new DoublyLinkedList();
  let p0 = DLL5.setHead(new Node(1));
  let p2 = DLL5.setTail(new Node(3));
  let p3 = DLL5.setTail(new Node(2));
  let p4 = DLL5.setTail(new Node(3));
  let p5 = DLL5.setTail(new Node(5));
  it('correctly removes multiple instances of a node', () => {
    DLL5.removeNodesWithValue(3);
    expected = DLL5.convertToArray();
    expect(expected.forward).toEqual([1,2,5]);
    expect(expected.backward).toEqual([5,2,1]);
  });
  it('correctly removes a single instance of a node', () => {
    DLL5.removeNodesWithValue(1);
    expected = DLL5.convertToArray();
    expect(expected.forward).toEqual([2,5]);
    expect(expected.backward).toEqual([5,2]);
  });
  it('correctly removes a single instance of a node, with that node being a head', () => {
    DLL5.removeNodesWithValue(2);
    expect(DLL5.head.value).toBe(5);
    expect(DLL5.tail).toBeNull();
  });
  it('correctly removes a single instance of a node, with that node being a tail, head is null', () => {
    DLL5.removeNodesWithValue(5);
    expected = DLL5.convertToArray();
    expect(expected.forward).toEqual([]);
    expect(expected.backward).toEqual([]);
  });
  it('should delete head and move tail to head if only two nodes in DLL', () => {
    const DLL8 = new DoublyLinkedList();
    DLL8.setHead(new Node(1));
    DLL8.setTail(new Node(2));
    DLL8.removeNodesWithValue(1);
    expect(DLL8.convertToArray().forward).toEqual([2]);
    expect(DLL8.convertToArray().backward).toEqual([2]);
    expect(DLL8.head.value).toBe(2);
    expect(DLL8.tail).toBeNull();
  })
  it('should delete tail if only two nodes in DLL and tail is selected to delete', () => {
    const DLL9 = new DoublyLinkedList();
    DLL9.setHead(new Node(1));
    DLL9.setTail(new Node(2));
    DLL9.removeNodesWithValue(2);
    expect(DLL9.convertToArray().forward).toEqual([1]);
    expect(DLL9.convertToArray().backward).toEqual([1]);
    expect(DLL9.head.value).toBe(1);
    expect(DLL9.tail).toBeNull();
  });
  it('should delete head and tail if both nodes need to be deleted and are the only two nodes in DLL', () => {
    const DLL10 = new DoublyLinkedList();
    DLL10.setHead(new Node(1));
    DLL10.setTail(new Node(1));
    DLL10.removeNodesWithValue(1);
    expect(DLL10.convertToArray().forward).toEqual([]);
    expect(DLL10.convertToArray().backward).toEqual([]);
    expect(DLL10.head).toBeNull();
    expect(DLL10.tail).toBeNull();
  })
});
describe('remove()', () => {
  const DLL11 = new DoublyLinkedList();
  let r0 = DLL11.setHead(new Node(1));
  let r1 = DLL11.setTail(new Node(3));
  let r2 = DLL11.setTail(new Node(2));
  let r3 = DLL11.setTail(new Node(3));
  let r4 = DLL11.setTail(new Node(5));
  it('should delete only one instance of a node', () => {
    DLL11.remove(3);
    expect(DLL11.convertToArray().forward).toEqual([1,2,3,5]);
    expect(DLL11.convertToArray().backward).toEqual([5,3,2,1]);
  });
  it('should delete only one instance of a node', () => {
    DLL11.remove(5);
    expect(DLL11.convertToArray().forward).toEqual([1,2,3]);
    expect(DLL11.convertToArray().backward).toEqual([3,2,1]);
  });
});
describe('containsNodeWithValue()', () => {
  const DLL12 = new DoublyLinkedList()
  DLL12.setHead(new Node(1))
  DLL12.setTail(new Node(2))
  DLL12.setTail(new Node(3))
  DLL12.setTail(new Node(4));
  it('detects if a node is NOT in the DLL', () => {
    expect(DLL12.containsNodeWithValue(100)).toBe(false);
  });
  it('detects if a node is in the DLL', () => {
    expect(DLL12.containsNodeWithValue(2)).toBe(true);
  });
});
