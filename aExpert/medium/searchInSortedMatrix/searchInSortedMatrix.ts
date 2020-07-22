
// Given a 2d matrix with distinct integers and a target integer, return the row and column indexes of the target integer as a tuple. If the target does not exist, return [-1, -1].

import { matrixTests, divideTests } from './testCases';


const searchInSortedMatrix = (matrix:number[][], target:number):[number,number] => {
  let result:[number,number] = [-1,-1]
  // search each row
  for (let i = 0; i < matrix.length; i += 1) {
    // if target within min and max of row, use Divide and Conquer to determine if target in row
    let min = matrix[i][0];
    let max = matrix[i][matrix[i].length - 1];
    if (target >= min && target <= max) {
      // search the array
      for (let j = 0; j < matrix[i].length; j += 1) {
        // if target found, return coordinates
        if (matrix[i][j] === target) {
          return [i, j]
        }
      }
    }
  }

  return result;
}

const num = 0
console.log(searchInSortedMatrix(matrixTests[num].matrix, matrixTests[num].target))

export default searchInSortedMatrix;