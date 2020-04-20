const { DoublyLinkedList, Node } = require('./linkedListConstruction');

let DLL;

beforeEach(() => {
  DLL = new DoublyLinkedList()
  DLL.setHead(new Node(1))
  DLL.setTail(new Node(2))
});

describe('base case', () => {
  describe('setHead()', () => {
    it('sets head', () => {
      // expect(DLL.head.value).toBe(1)
      console.log(DLL)
    })
  })
  describe('setTail()', () => {
    it('', () => {
      it('sets tail', () => {
        // expect(DLL.tail.value).toBe(1)
        console.log(DLL)
      })
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