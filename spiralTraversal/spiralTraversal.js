/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {

  // TODO: Implement me!
};

console.log(spiralTraversal([
  [1,2,3],
  [8,9,4],
  [7,6,5],
]));

console.log(spiralTraversal([
  [ 1, 2, 3, 4],
  [12,13,14, 5],
  [11,16,15, 6],
  [10, 9, 8, 7],
]));

console.log(spiralTraversal([
  [ 1, 2, 3, 4, 5],
  [16,17,18,19, 6],
  [15,24,25,20, 7],
  [14,23,22,21, 8],
  [13,12,11,10, 9],
]));