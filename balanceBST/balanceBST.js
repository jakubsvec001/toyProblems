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
        if (toSort < sorted[0]) {
          sorted.unshift(toSort);
        } else {
          sorted.splice(1, 0, toSort);
        }
      } else if (toSort > toCompare) {
        sorted.splice(j + 1, 0, toSort);
        break;
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

BST.prototype.toArray = function (isDepthFirst) {
  const result = [];
  if (isDepthFirst) {
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
  while (true) {
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
        context = context.right;
      }
    }
  }
};

BST.prototype.balance = function () {
  const sortedArray = insertionSort(this.toArray())
  let balancedBST;
  const binarySearch = (zoneTuples) => {
    let middleIndex;
    let middleItem;
    let zone;
    let lowerZone;
    let upperZone;
    // get lefts, middle, and rights for each item in zoneTuples
    const newZoneTuples = [];
    for (let i = 0; i < zoneTuples.length; i += 1){
      zone = zoneTuples[i];
      const [lowerIndex, upperIndex] = zone;
      middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
      middleItem = sortedArray[middleIndex];
      if (balancedBST) balancedBST.add(middleItem);
      else balancedBST = new BST(middleItem);
      // get new left for zone
      lowerZone = [lowerIndex, middleIndex - 1];
      // get new right for zone
      upperZone = [middleIndex + 1, upperIndex];
      if (lowerZone[0] <= lowerZone[1]){
        newZoneTuples.push(lowerZone);
      }
      if (upperZone[0] <= upperZone[1]){
        newZoneTuples.push(upperZone);
      }
    }
    if (newZoneTuples.length !== 0) binarySearch(newZoneTuples);
  };
  binarySearch([[0, sortedArray.length - 1]]);
  return balancedBST;
};

// const root = new BST(5);
// root.add(1);
// root.add(3);
// root.add(2);
// root.add(4);
// root.add(10);
// root.add(8);
// root.add(7);
// root.add(9);
// root.add(6);
// console.log(root.balance().toArray())

// console.log(root.balance());

module.exports = { BST, insertionSort };
