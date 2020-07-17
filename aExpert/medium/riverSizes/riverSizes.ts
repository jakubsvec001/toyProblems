/**
 * Given a two-dimensional array containing only 0's and 1's, each 0 indicates land, each 1 represents a part of a river. A river is defined by 1's that are horizontally or vertically adjacent. Diagonal adjacency doesn't define a river portion.
 * Return an array of all river lengths. The array does not have to be in any specific order;
 */

import { tests, testInterface } from './tests';


const riverSizes = (mat: number[][]):number[] => {
  const result:number[] = [];
  let riverLength:number;

  const processRiver = (y:number, x:number, currentRiverLength:number) => {
    // increment riverLength and update to 0
    currentRiverLength += 1;
    mat[y][x] = 0;
    // process directions
    // process left
    if (mat[y][x-1]) {
      if (mat[y][x-1] === 1) {
        currentRiverLength = processRiver(y, x-1, currentRiverLength);
      }
    }
    // process right
    if (mat[y][x+1]) {
      if (mat[y][x+1] === 1) {
        currentRiverLength = processRiver(y, x+1, currentRiverLength);
      }
    }
    // process down
    if (mat[y+1]) {
      if (mat[y+1][x] === 1) {
        currentRiverLength = processRiver(y+1, x, currentRiverLength);
      }
    }
    if (mat[y-1]) {
      if (mat[y-1][x] === 1) {
        currentRiverLength = processRiver(y-1, x, currentRiverLength);
      }
    }
    return currentRiverLength;
  }
  // iterate across
  for (let y = 0; y < mat.length; y += 1) {
    // iterate down
    for (let x = 0; x < mat[0].length; x += 1) {
      // check for beginning of river
      if (mat[y][x] === 1) {
        // if river part, process the entire river
        result.push(processRiver(y, x, 0));
      }  
    }
  }
  return result;
};


export default riverSizes;
