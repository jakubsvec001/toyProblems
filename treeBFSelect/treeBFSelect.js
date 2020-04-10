/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};



Tree.prototype.BFSelect = function(filter) {
  // return an array of values for which the function filter(value, depth) returns true
  let results = [];
  if (filter(this.value, 0)){
    results.push(this.value);
  }
  let queue = this.children.map(child => {
    return {node: child, depth: 1}
  })
  while (queue.length > 0){
    node = queue.shift()
    queue.push(...node.node.children.map(child => {
      return {node: child, depth: node.depth + 1}
    }));
    if (filter(node.node.value, node.depth)){
      results.push(node.node.value)
    }
  }
  return results;
};





/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};



var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
const result1 = root1.BFSelect(function (value, depth) {
  return value % 2;
})
// [1, 3, 5, 7]

const result2 = root1.BFSelect(function (value, depth) {
  return depth === 1;
})
// [2, 3]

console.log(result1)
console.log(result2)




// function () {



//   // keep a list of nodes by depth to compare

//   var nodeDepths = [];

//   var deepNodes = [];

//   var root = new Tree(0);

//   // depth: 0

//   nodeDepths.push([0]);

//   // depth: 1

//   deepNodes = [];

//   deepNodes.push(1);root.addChild(1);

//   deepNodes.push(2);root.addChild(2);

//   nodeDepths.push(deepNodes);

//   // depth: 2

//   deepNodes = [];

//   deepNodes.push(3);root.children[0].addChild(3);

//   deepNodes.push(4);root.children[0].addChild(4);

//   deepNodes.push(5);root.children[1].addChild(5);

//   deepNodes.push(6);root.children[1].addChild(6);

//   nodeDepths.push(deepNodes);

//   // depth: 3 (sparse)

//   deepNodes = [];

//   deepNodes.push(3);root.children[0].children[0].addChild(3);

//   deepNodes.push(4);root.children[0].children[0].addChild(4);

//   deepNodes.push(5);root.children[1].children[0].addChild(5);

//   deepNodes.push(6);root.children[1].children[0].addChild(6);

//   nodeDepths.push(deepNodes);



//   // helper functions for the tests



//   // this filter constructor produces a filter for the specified depth

//   var depthFilter = function depthFilter(filterDepth) {

//     return function (node, nodeDepth) {

//       return filterDepth === nodeDepth;

//     };

//   };



//   // so that `[1, 5, 2]`  and `[5, 2, 1]` are considered equal

//   var shouldBeDeepEqualSorted = function shouldBeDeepEqualSorted(array1, array2) {

//     array1.sort(function (a, b) {

//       return a - b;

//     });

//     array2.sort(function (a, b) {

//       return a - b;

//     });

//     array1.should.eql(array2); // deep equality

//   };



//   // the actual tests



//   shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);

//   shouldBeDeepEqualSorted(root.BFSelect(depthFilter(1)), nodeDepths[1]);

//   shouldBeDeepEqualSorted(root.BFSelect(depthFilter(2)), nodeDepths[2]);

//   shouldBeDeepEqualSorted(root.BFSelect(depthFilter(3)), nodeDepths[3]);