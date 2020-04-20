const { DoublyLinkedList, Node } = require('./linkedListConstruction');

let expected;

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

describe('base case', () => {
  describe('setHead()', () => {
    it('1', () => {
      expect(DLL1.convertToArray().foreward).toEqual([3, 2, 1]);
      expect(DLL1.convertToArray().backward).toEqual([1, 2, 3]);
    });
    it('2', () => {
      expect(DLL1.head.value).toBe(3);
    });
  });
  describe('setTail()', () => {
    it('1', () => {
      expect(DLL2.convertToArray().foreward).toEqual([1, 2, 3]);
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
  });
  describe('insertAfter()', () => {
    it('inserts into the middle of multiple nodes', () => {
      DLL3.insertAfter(n0, new Node(2));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 5, 1000, 2]);
    });
    it('inserts into the tail, if desired', () => {
      DLL3.insertAfter(n1, new Node(555));
      expected = DLL3.convertToArray();
      expect(expected.forward).toEqual([99, 1, 5, 1000, 2, 555]);
    });
  });
  describe('insertAtPosition()', () => {
    it('', () => {});
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

describe('edge case', () => {
  describe('setHead()', () => {
    it('', () => {});
  });
  describe('setTail()', () => {
    it('', () => {});
  });
  describe('insertBefore()', () => {
    it('', () => {});
  });
  describe('insertAfter()', () => {
    it('', () => {});
  });
  describe('insertAtPosition()', () => {
    it('', () => {});
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
