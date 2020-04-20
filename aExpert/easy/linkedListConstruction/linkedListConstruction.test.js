const { DoublyLinkedList, Node } = require('./linkedListConstruction');


const DLL1 = new DoublyLinkedList();
DLL1.setHead(new Node(1));
DLL1.setHead(new Node(2));
DLL1.setHead(new Node(3));

const DLL2 = new DoublyLinkedList();
DLL2.setTail(new Node(1));
DLL2.setTail(new Node(2));
DLL2.setTail(new Node(3));


describe('base case', () => {
  describe('setHead()', () => {
    it('1', () => {
      expect(DLL1.convertToArray()[0]).toEqual([3,2,1])
      expect(DLL1.convertToArray()[1]).toEqual([1,2,3])
    })
    it('2', () => {
      expect(DLL1.head.value).toBe(3)
    })
  })
  describe('setTail()', () => {
    it('1', () => {
      expect(DLL2.convertToArray()[0]).toEqual([1,2,3])
      expect(DLL2.convertToArray()[1]).toEqual([3,2,1])
    })
    it('2', () => {
      expect(DLL2.tail.value).toBe(3)
    })
  })
  describe('insertBefore()', () => {
    DLL = new DoublyLinkedList()
    let n0 = DLL.setHead(new Node(1))
    let n1 = DLL.setTail(new Node(2))
    DLL.insertBefore(n1, new Node(1000))
    it('inserts in between 2 nodes', () => {
      expect(DLL.head.next.value).toBe(1000)
    })
  })
  describe('insertAfter()', () => {
    it('', () => {
      
    })
  })
  describe('insertAtPosition()', () => {
    it('', () => {
      
    })
  })
  describe('removeNodesWithValue()', () => {
    it('', () => {
      
    })
  })
  describe('remove()', () => {
    it('', () => {
      
    })
  })
  describe('containsNodeWithValue()', () => {
    it('', () => {
      
    })
  })
})

describe('edge case', () => {
  describe('setHead()', () => {
    it('', () => {
      
    })
  })
  describe('setTail()', () => {
    it('', () => {
      
    })
  })
  describe('insertBefore()', () => {
    it('', () => {
      
    })
  })
  describe('insertAfter()', () => {
    it('', () => {
      
    })
  })
  describe('insertAtPosition()', () => {
    it('', () => {
      
    })
  })
  describe('removeNodesWithValue()', () => {
    it('', () => {
      
    })
  })
  describe('remove()', () => {
    it('', () => {
      
    })
  })
  describe('containsNodeWithValue()', () => {
    it('', () => {
      
    })
  })
})