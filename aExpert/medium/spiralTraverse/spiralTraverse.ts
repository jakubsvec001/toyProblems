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

export type multi = number[][];



const spiralTraverse = (array: multi):number[] => {
  let result:number[] = [];
  let rStart = 0;
  let cStart = 0;
  let rEnd = array.length - 1;
  let cEnd = array[0].length -1;
  let step = 1;
  let i;


  const processes = {
    // 1.1 iterate right
    // 1.2 increment rStart
    right:  () => {
      for (i = cStart; i <= cEnd; i += 1) {
        result.push(array[rStart][i])
      } 
      rStart += 1;
    },
    // 2.1 iterate down
    // 2.2 decrement cEnd
    down: () => {
      for (i = rStart; i <= rEnd; i += 1) {
        result.push(array[i][cEnd]);
      }
      cEnd -= 1;
    },
    // 3.1 iterate left
    // 3.2 decrement rEnd
    left: () => {
      for (i = cEnd; i >= cStart; i -= 1) {
        result.push(array[rEnd][i]);
      }
      rEnd -= 1;
    }, 
      // 4.1 iterate up
      // 4.2 increment cStart
    up: () => {
      for (let i = rEnd; i >= rStart; i -= 1) {
        result.push(array[i][cStart]);
      }
      cStart += 1;
    },  
  }

  // do unitl rStart <= rEnd || cStart <= cEnd
  while (rStart <= rEnd && cStart <= cEnd) {
    if (step % 4 === 1) processes.right();
    else if (step % 4 === 2) processes.down();
    else if (step % 4 === 3) processes.left();
    else if (step % 4 === 0) processes.up();
    step += 1 
  }

  return result;
};

const ex1 = {
  matrix: [
    [1, 2, 3, 4, 5],
    [14, 15, 16, 17, 6],
    [13, 20, 19, 18, 7],
    [12, 11, 10, 9, 8],
  ],
  output: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ],
};

const ex2 = {
  matrix: [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ],
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
};

const ex3 = {
  matrix: [
    [1, 2, 3, 4],
    [14, 15, 16, 5],
    [13, 20, 21, 6],
    [12, 19, 18, 7],
    [11, 10, 9, 8]
  ],
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};

console.log(spiralTraverse(ex2.matrix))

export default spiralTraverse;
