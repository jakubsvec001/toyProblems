const { DoublyLinkedList, Node } = require('./linkedListConstruction');

let expected;
let output;

const DLL1 = new DoublyLinkedList();
DLL1.setHead(new Node(1));
DLL1.setHead(new Node(2));
DLL1.setHead(new Node(3));

const DLL2 = new DoublyLinkedList();
DLL2.setTail(new Node(1));
DLL2.setTail(new Node(2));
DLL2.setTail(new Node(3));

const DLL3 = new DoublyLinkedList();
let n0 = DLL3.setHead(new Node(1));
let n1 = DLL3.setTail(new Node(2));
DLL3.insertBefore(n1, new Node(1000));

const DLL4 = new DoublyLinkedList();
let m0 = DLL4.setHead(new Node(1));
let m1 = DLL4.setTail(new Node(2));
let m2 = DLL4.setTail(new Node(3));

describe('base case', () => {
  describe('setHead()', () => {
    it('1', () => {
      expect(DLL1.convertToArray().forward).toEqual([3, 2, 1]);
      expect(DLL1.convertToArray().backward).toEqual([1, 2, 3]);
    });
    it('2', () => {
      expect(DLL1.head.value).toBe(3);
    });
  });
  describe('setTail()', () => {
    it('1', () => {
      expect(DLL2.convertToArray().forward).toEqual([1, 2, 3]);
      expect(DLL2.convertToArray().backward).toEqual([3, 2, 1]);
    });
    it('2', () => {
      expect(DLL2.tail.value).toBe(3);
    });
  });
  describe('insertBefore()', () => {
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
  });
  describe('insertAfter()', () => {
    it('inserts into the middle of multiple nodes', () => {
      DLL3.insertAfter(n0, new Node(5));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 5, 1000, 2]);
      expect(expected.backward).toEqual([2,1000,5,1,99]);
    });
    it('inserts into the tail, if desired', () => {
      output = DLL3.insertAfter(n1, new Node(555));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 5, 1000, 2, 555]);
      expect(expected.backward).toEqual([555,2,1000,5,1,99]);
    });
    it('returns undefined if unable to insert', () => {
      output = DLL3.insertBefore(new Node(2222), new Node(100));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 5, 1000, 2, 555]);
      expect(expected.backward).toEqual([555,2,1000,5,1,99]);
      expect(DLL3.head.value).toBe(99);
      expect(output).toBeUndefined();
    });
  });
  describe('insertAtPosition()', () => {
    it('inserts into second position', () => {
      DLL4.insertAtPosition(2, new Node(200));
      expected = DLL4.convertToArray();
      expect(expected.forward).toEqual([1, 200, 2, 3]);
      expect(expected.backward).toEqual([3, 2, 200, 1]);
    })
    it('inserts into first position', () => {
      DLL4.insertAtPosition(0, new Node(0));
      expected = DLL4.convertToArray();
      expect(expected.forward).toEqual([0, 1, 200, 2, 3]);
      expect(expected.backward).toEqual([3, 2, 200, 1, 0]);
    })
    it('inserts into past position', () => {
      DLL4.insertAtPosition(5, new Node(999));
      expected = DLL4.convertToArray();
      expect(expected.forward).toEqual([0, 1, 200, 2, 3, 999]);
      expect(expected.backward).toEqual([999, 3, 2, 200, 1, 0]);
    })
    it('Edge case - cannot insert, position out of bounds, returns undefined', () => {
      output = DLL4.insertAtPosition(7, new Node(3000));
      expected = DLL4.convertToArray();
      expect(expected.forward).toEqual([0, 1, 200, 2, 3, 999]);
      expect(expected.backward).toEqual([999, 3, 2, 200, 1, 0]);
      expect(output).toBeUndefined();
    })
  });
  describe('removeNodesWithValue()', () => {
    it('', () => {});
  });
  describe('remove()', () => {
    it('', () => {});
  });
  describe('containsNodeWithValue()', () => {
    it('', () => {});
  });
});
