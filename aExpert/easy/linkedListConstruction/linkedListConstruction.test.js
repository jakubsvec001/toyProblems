const { DoublyLinkedList, Node } = require('./linkedListConstruction');

let expected;
let output;

describe('base case', () => {
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
    it('inserts into head if desired', () => {
      DLL3.insertBefore(n0, new Node(99));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 1000, 2]);
      expect(expected.backward).toEqual([2, 1000, 1, 99]);
      expect(DLL3.head.value).toBe(99);
    });
    it('returns undefined if unable to insert', () => {
      output = DLL3.insertBefore(new Node(2222), new Node(100));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 1000, 2]);
      expect(expected.backward).toEqual([2, 1000, 1, 99]);
      expect(DLL3.head.value).toBe(99);
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
      expect(DLL5.head.value).toBe(2)
      expect(DLL5.tail.value).toBe(5)
      expected = DLL5.convertToArray();
      expect(expected.forward).toEqual([5]);
      expect(expected.backward).toEqual([5]);
      expect(DLL5.head.value).toBeNull()
      expect(DLL5.tail.value).toBe(5)
    });
    it('correctly removes a single instance of a node, with that node being a tail, head is null', () => {
      DLL5.removeNodesWithValue(5);
      expected = DLL5.convertToArray();
      expect(expected.forward).toEqual([]);
      expect(expected.backward).toEqual([]);
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
    const DLL8 = new DoublyLinkedList();
    DLL8.setHead(new Node(1));
    DLL8.setTail(new Node(2));
    DLL8.removeNodesWithValue(1);
    it('should delete head and move tail to head if only two nodes in DLL', () => {
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
    it.only('should delete head and tail if both nodes need to be deleted and are the only two nodes in DLL', () => {
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
    const DLL6 = new DoublyLinkedList();
    let r0 = DLL6.setHead(new Node(1));
    let r1 = DLL6.setTail(new Node(3));
    let r2 = DLL6.setTail(new Node(2));
    let r3 = DLL6.setTail(new Node(3));
    let r4 = DLL6.setTail(new Node(5));
    it('', () => {});
  });
  describe('containsNodeWithValue()', () => {
    it('', () => {});
  });
});
