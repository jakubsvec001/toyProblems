const { DoublyLinkedList, Node } = require('./linkedListConstruction');

let expected;
let output;
let ll;

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
    expect(DLL13.convertToArray().forward).toEqual([5, 4, 3, 2, 1]);
    expect(DLL13.convertToArray().backward).toEqual([1, 2, 3, 4, 5]);
    DLL13.insertBefore(third, first);
    expect(DLL13.convertToArray().forward).toEqual([5, 4, 1, 3, 2]);
    expect(DLL13.convertToArray().backward).toEqual([2, 3, 1, 4, 5]);
    DLL13.insertBefore(fifth, second);
    expect(DLL13.convertToArray().forward).toEqual([2, 5, 4, 1, 3]);
    expect(DLL13.convertToArray().backward).toEqual([3, 1, 4, 5, 2]);
    DLL13.insertBefore(fifth, fourth);
    expect(DLL13.convertToArray().forward).toEqual([2, 4, 5, 1, 3]);
    expect(DLL13.convertToArray().backward).toEqual([3, 1, 5, 4, 2]);
    DLL13.insertBefore(second, sixth);
    expect(DLL13.convertToArray().forward).toEqual([6, 2, 4, 5, 1, 3]);
    expect(DLL13.convertToArray().backward).toEqual([3, 1, 5, 4, 2, 6]);
    DLL13.insertBefore(first, seventh);
    expect(DLL13.convertToArray().forward).toEqual([6, 2, 4, 5, 7, 1, 3]);
    expect(DLL13.convertToArray().backward).toEqual([3, 1, 7, 5, 4, 2, 6]);
    expect(DLL13.head.value).toBe(6);
    expect(DLL13.tail.value).toBe(3);
  });
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
  it('#1', () => {
    const DLL14 = new DoublyLinkedList();
    const first = new Node(1);
    const second = new Node(2);
    const third = new Node(3);
    const fourth = new Node(4);
    const fifth = new Node(5);
    const sixth = new Node(6);
    const seventh = new Node(7);
    DLL14.insertAfter(first, second);
    DLL14.insertAfter(second, third);
    DLL14.insertAfter(third, fourth);
    DLL14.insertAfter(fourth, fifth);
    expect(DLL14.convertToArray().forward).toEqual([1, 2, 3, 4, 5]);
    expect(DLL14.convertToArray().backward).toEqual([5, 4, 3, 2, 1]);
    DLL14.insertAfter(third, fifth);
    expect(DLL14.convertToArray().forward).toEqual([1, 2, 3, 5, 4]);
    expect(DLL14.convertToArray().backward).toEqual([4, 5, 3, 2, 1]);
    DLL14.insertAfter(third, first);
    expect(DLL14.convertToArray().forward).toEqual([2, 3, 1, 5, 4]);
    expect(DLL14.convertToArray().backward).toEqual([4, 5, 1, 3, 2]);
    DLL14.insertAfter(fifth, second);
    expect(DLL14.convertToArray().forward).toEqual([3, 1, 5, 2, 4]);
    expect(DLL14.convertToArray().backward).toEqual([4, 2, 5, 1, 3]);
    DLL14.insertAfter(second, first);
    expect(DLL14.convertToArray().forward).toEqual([3, 5, 2, 1, 4]);
    expect(DLL14.convertToArray().backward).toEqual([4, 1, 2, 5, 3]);
    DLL14.insertAfter(fourth, sixth);
    expect(DLL14.convertToArray().forward).toEqual([3, 5, 2, 1, 4, 6]);
    expect(DLL14.convertToArray().backward).toEqual([6, 4, 1, 2, 5, 3]);
    DLL14.insertAfter(third, sixth);
    expect(DLL14.convertToArray().forward).toEqual([3, 5, 2, 7, 1, 4, 6]);
    expect(DLL14.convertToArray().backward).toEqual([6, 4, 1, 7, 2, 5, 3]);
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
    expect(expected.forward).toEqual([1, 2, 5]);
    expect(expected.backward).toEqual([5, 2, 1]);
  });
  it('correctly removes a single instance of a node', () => {
    DLL5.removeNodesWithValue(1);
    expected = DLL5.convertToArray();
    expect(expected.forward).toEqual([2, 5]);
    expect(expected.backward).toEqual([5, 2]);
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
  });
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
  });
});
describe.only('remove()', () => {
  ll = new DoublyLinkedList();
  const node1 = new Node(1)
  const node2 = new Node(2)
  const node3 = new Node(3)
  const node4 = new Node(4)
  const node5 = new Node(5)
  const node6 = new Node(6)
  ll.setHead(node1)
  ll.setHead(node2)
  ll.setHead(node3)
  ll.setHead(node4)
  ll.setHead(node5)

  it('deletes node4', () => {
    ll.remove(node4)
    expect(ll.convertToArray().forward).toEqual([5,3,2,1])
    expect(ll.convertToArray().backward).toEqual([1,2,3,5])
  })
  it('maintains correct head and tail', () => {
    expect(ll.head.value).toBe(5);
    expect(ll.tail.value).toBe(1);
  })
  it('deletes node1', () => {
    ll.remove(node1)
    expect(ll.convertToArray().forward).toEqual([5,3,2])
    expect(ll.convertToArray().backward).toEqual([2,3,5])
  })
  it('maintains correct head and tail', () => {
    expect(ll.head.value).toBe(5);
    expect(ll.tail.value).toBe(2);
  })
  it('deletes node5', () => {
    ll.remove(node5)
    expect(ll.convertToArray().forward).toEqual([3,2])
    expect(ll.convertToArray().backward).toEqual([2,3])
  })
  it('maintains correct head and tail', () => {
    expect(ll.head.value).toBe(3);
    expect(ll.tail.value).toBe(2);
  })
  it('deletes node2', () => {
    ll.remove(node2)
    expect(ll.convertToArray().forward).toEqual([3])
    expect(ll.convertToArray().backward).toEqual([3])
  })
  it('maintains correct head and tail', () => {
    expect(ll.head.value).toBe(3);
    expect(ll.tail).toBeNull();
  })
  it('deletes node3', () => {
    ll.remove(node3)
    expect(ll.convertToArray().forward).toEqual([])
    expect(ll.convertToArray().backward).toEqual([])
  })
  it('maintains correct head and tail', () => {
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
  })
});
describe('containsNodeWithValue()', () => {
  const DLL12 = new DoublyLinkedList();
  DLL12.setHead(new Node(1));
  DLL12.setTail(new Node(2));
  DLL12.setTail(new Node(3));
  DLL12.setTail(new Node(4));
  it('detects if a node is NOT in the DLL', () => {
    expect(DLL12.containsNodeWithValue(100)).toBe(false);
  });
  it('detects if a node is in the DLL', () => {
    expect(DLL12.containsNodeWithValue(2)).toBe(true);
  });
});
