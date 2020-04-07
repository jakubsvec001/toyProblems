const insertionSort = () => {};

const BST = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
  return this;
};

BST.prototype.toArray = function (isDepthFirst = true) {
  const result = [];
  if (isDepthFirst) {
    console.log('Depth First');
    const depthFirst = (node) => {
      result.push(node.value);
      [node.left, node.right].forEach((child) => {
        if (child) {
          depthFirst(child);
        }
      });
    };
    depthFirst(this);
  } else {
    console.log('Breadth First');
    const breadthFirst = (nodes) => {
      const children = [];
      nodes.forEach((child) => {
        result.push(child.value);
        if (child.left) children.push(child.left);
        if (child.right) children.push(child.right);
      });
      if (children.length !== 0) breadthFirst(children);
    };
    breadthFirst([this])
  }
  return result;
};

BST.prototype.add = function (val) {
  let context = this;
  while (true) {
    const directions = ['left', 'right'];
    const direction = val < context.value ? directions[0] : directions[1];
    if (context[direction] === null) {
      context[direction] = new BST(val);
      break;
    }
    context = context[direction];
  }
};

root = new BST(3)
root.add(5)
root.add(1)
root.add(3)
root.add(2)
root.add(4)
root.add(7)
root.add(8)
root.add(9)
root.add(10)
root.add(11)
root.toArray(false)

BST.prototype.balance = function () {};

module.exports = { BST };
