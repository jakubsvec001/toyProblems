const insertionSort = (arr) => {
  let sorted = [arr[0]];
  let unsorted = arr.slice(1);
  let toSort;
  let toCompare;
  while (unsorted.length !== 0) {
    toSort = unsorted[0];
    unsorted = unsorted.slice(1);
    for (let j = sorted.length - 1; j >= 0; j -= 1) {
      toCompare = sorted[j];
      if (j === 0) {
        if (toSort < sorted[0]){
          sorted.unshift(toSort)
        } else {
          sorted.splice(1, 0, toSort)
        }
      } else if (toSort > toCompare) {
        sorted.splice(j+1, 0, toSort)
        break
      } 
    }
  }
  return sorted;
};

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
    breadthFirst([this]);
  }
  return result;
};

BST.prototype.add = function (val) {
  let context = this;
  while(true){
    if (val < context.value) {
      if (context.left === null) {
        context.left = new BST(val);
        break;
      } else {
        context = context.left;
      }
    } else {
      if (context.right === null) {
        context.right = new BST(val);
        break;
      } else {
        context = context.right
      }
    }
  }
};


BST.prototype.balance = function () {};

const root = new BST(5)
root.add(1)
root.add(3)
root.add(2)
root.add(4)
root.add(10)
root.add(8)
root.add(7)
root.add(9)
root.add(6)
console.log(root.toArray(false))

module.exports = { BST, insertionSort };
