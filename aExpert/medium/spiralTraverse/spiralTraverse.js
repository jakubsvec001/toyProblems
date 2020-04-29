
/**
 * take in an array of size n*m. The spiral starts at the top left corner of the array [0,0] and processeds in a spiral pattern all the way until every element has been visited
 * 
 *     
 * array = [[ 1, 2, 3, 4],
 *          [12,13,14, 5],
 *          [11,16,15, 6],
 *          [10, 9, 8, 7]]
 * 
 * result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
 */

const spiralTraverse = (array) => {
  const rowLength = array[0].length;
  const colLength = array.length;
  let colStart = 0;
  let colEnd = rowLength - 1;
  let rowStart = 0;
  let rowEnd = colLength - 1;
  const result = [];
  while (colStart <= Math.floor(colLength / 2) || rowStart <= Math.floor(rowLength / 2)){
    // iterate the top row
    for (let i = colStart; i <= colEnd; i += 1) {
      result.push(array[rowStart][i])
    }
    // iterate right
    for (let j = rowStart; j < rowEnd; j += 1) {
      result.push(array[j][colEnd])
    }
    // iterate bottom
    for (let i = colEnd; i >= colStart; i -= 1) {
      result.push(array[rowEnd][i])
    }
    // iterate left
    colEnd -= 1;
    rowStart += 1;
    for (let j = rowEnd; j >= rowStart; j -= 1) {
      result.push(array[j][colStart]);
    }
    colStart += 1;
    rowEnd -= 1;
  }
  return result;
}

const array = [
  [1, 2, 3, 4, 5],
  [14, 15, 16, 17, 6],
  [13, 20, 19, 18, 7],
  [12, 11, 10, 9, 8],
];
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(spiralTraverse(array))


module.exports = { spiralTraverse }
