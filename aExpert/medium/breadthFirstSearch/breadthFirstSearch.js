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

module.exports = { Node };
