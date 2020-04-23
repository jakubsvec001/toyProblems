class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const result = [];
    const traverse = (toTraverse, result) => {
      const tempArray = [];
      toTraverse.forEach((node) => {
        result.push(node.name);
      });
      toTraverse.forEach((node) => {
        tempArray.push(...node.children);
      });
      if (tempArray.length !== 0){
        traverse(tempArray, result);
      }
    };
    traverse([this], result);
    return result;
  }

  breadthFirstSearchPure(array = [], result = []) {
    if (array.length === 0) array = [this];
    const tempArray = [];
    array.forEach((node)=>{
      result.push(node.name);
      tempArray.push(...node.children);
    });
    if (tempArray.length > 0) {
      result = this.breadthFirstSearch(tempArray, result)
    };
    return result;
  }
}


const tree20 = new Node(0).addChild(1).addChild(2).addChild(3);
tree20.children[0].addChild(4).addChild(5)
tree20.children[2].addChild(6).addChild(7);
tree20.children[0].children[1].addChild(8).addChild(9)
tree20.children[2].children[1].addChild(10)
console.log(tree20.breadthFirstSearchPure([])); //.toEqual([0,1,2,3,4,5,6,7,8,9,10]);

module.exports = { Node };
