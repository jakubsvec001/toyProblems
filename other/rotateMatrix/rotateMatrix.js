/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

const pluckCol = (matrix, col) => {
  const row = [];
  for (let i = 0; i < matrix.length; i += 1) {
    row.push(matrix[i][col])
  }
  console.log(row)
  return row
} 

var rotateMatrix = function(matrix, clockwise = 1) {
  // Your code here.
  // init result
  const result = [];
  if (matrix.length === 0) {
    return matrix
  }
  // if clockwise = 1, rotate clockwise
  const nCols = matrix[0].length;
  const nRows = matrix.length;
  if (clockwise === 1) {
    // snap vertically from left to right, reverse, append
    console.log('clockwise')
    for (let col = 0; col < nCols; col += 1) {
      result.push(pluckCol(matrix, col).reverse())
    }
  // if clockwise = -1, rotate anticlockwise
  } else {
    console.log('anticlockwise')
    // snap vertically from right to left, append
    for (let col = nCols-1; col >= 0; col -= 1) {
      result.push(pluckCol(matrix, col))
    }
  }
  // return result
  return result;
};



var matrix1 = [
[1,2,3,4],
[5,6,7,8],
[9,'A','B','C'],
['D','E','F','G']
];


var matrixRotatedCW = [
  ['D',9,5,1],
  ['E','A',6,2],
  ['F','B',7,3],
  ['G','C',8,4]
]

var matrixRotatedACW = [
  [ 4, 8,'C','G'],
  [ 3, 7,'B','F'],
  [ 2, 6,'A','E'],
  [ 1, 5, 9, 'D']
]

// console.log(pluckCol(matrix1, 2));
// console.log(pluckColReversed(matrix1, 2));

var rotatedMatrix = rotateMatrix(matrix1, 1); // Rotate 90 degrees clockwise
console.log(rotatedMatrix)
console.log(JSON.stringify(rotatedMatrix) === JSON.stringify(matrixRotatedCW))

rotatedMatrix = rotateMatrix(matrix1, -1); // Rotate 90 degrees clockwise
console.log(rotatedMatrix)
console.log(JSON.stringify(rotatedMatrix) === JSON.stringify(matrixRotatedACW))