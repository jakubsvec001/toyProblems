const { Node } = require('./breadthFirstSearch');

describe('Node class', () => {
  describe('constructor() & addChild(name) methods', () => {
    const tree1 = new Node(0);
    it('1', () => {
      expect(tree1.name).toBe(0);
      expect(tree1.children).toEqual([]);
    });
    it('2', () => {
      tree1.addChild(1);
      tree1.addChild(2);
      tree1.addChild(1000);
      expect(tree1.children.length).toBe(3);
      console.log(tree1.children);
      expect(tree1.children).toEqual([
        { children: [], name: 1 },
        { children: [], name: 2 },
        { children: [], name: 1000 },
      ]);
    });
  });

  describe('.breadthFirstSearch(array)', () => {
    it('1', () => {
      const tree20 = new Node(0).addChild(1).addChild(2).addChild(3);
      tree20.children[0].addChild(4).addChild(5)
      tree20.children[2].addChild(6).addChild(7);
      tree20.children[0].children[1].addChild(8).addChild(9)
      tree20.children[2].children[1].addChild(10)
      expect(tree20.breadthFirstSearch([])).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    });
  });
  describe('.breadthFirstSearchPure(array)', () => {
    it('1', () => {
      const tree20 = new Node(0).addChild(1).addChild(2).addChild(3);
      tree20.children[0].addChild(4).addChild(5)
      tree20.children[2].addChild(6).addChild(7);
      tree20.children[0].children[1].addChild(8).addChild(9)
      tree20.children[2].children[1].addChild(10)
      expect(tree20.breadthFirstSearchPure([])).toEqual([0,1,2,3,4,5,6,7,8,9,10]);
    });
  });
});
