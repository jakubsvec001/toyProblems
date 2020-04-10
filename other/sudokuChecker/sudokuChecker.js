/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/


const checkRows = (b) => {
  for (let row of b) {
    const obj = {}
    for (let num of row) {
      obj[num] = num;
    }
    if (!Object.keys(obj).length === 9){
      return false;
    }
  }
  return true;
}

const transpose = (b) => {
  const transposed = Object.keys(b).map((col) => {
    return b.map((row) => {
      return row[col]
    })
  })
  return transposed;
}

const checkColumns = (b) => {
  const transposed = transpose(b);
  return checkRows(transposed)
}

const checkGrid = (grid) => {
  console.log(Object.keys(grid).length === 9)
  console.log(grid)
  return Object.keys(grid).length === 9;
}

const checkGrids = (b) => {
  const gridCount = b.length / 3;
  let item;
  for (let xOffset = 0; xOffset < gridCount; xOffset += 1) {
    for (let yOffset = 0; yOffset < gridCount; yOffset += 1) {
      const grid = {};
      for (let row = 0; row < 3; row += 1) {
        for (let col = 0; col < 3; col += 1) {
          item = b[col + yOffset * 3][row + xOffset * 3]
          grid[item] = item;
        }
      }
      if (!checkGrid(grid)) {
        return false
      }
    }
  }
  return true
}

const makeMatrix = (b) => {
  const array = b.split('\n');
  const bArray = [];
  for (let row of array) {
    const intRow = []
    for (let num of row.split('')) {
      intRow.push(+num)
    }
    bArray.push(intRow)
  }
  return bArray;
}

function sudokuChecker(board) {
  const matrix = makeMatrix(board);
  const row = checkRows(matrix);
  console.log('row', row)
  const col = checkColumns(matrix);
  console.log('col', col)
  const grid = checkGrids(matrix);
  if (row && col && grid){
    return 'solved';
  } else {
    return 'invalid';
  }
}

const board = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
const board2 = "735814296\n896273314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";

console.log(sudokuChecker(board2))

