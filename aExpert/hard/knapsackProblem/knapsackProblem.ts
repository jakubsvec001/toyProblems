// You are given an array of tuples (items) and an integer (capacity). Tuple[0] is of type number and represents the tuple item's value. Tuple[1] is of type number and represent the tuple item's weight.
// Fit as may items into a knapsack that has a maximum capacity of 'capacity' while maximizing the total value of the knapsack contents.
// The function returns the combined maximum value, as well as an array of indices of the input items. In the cas of multiple combinations of items that match the same maximum value, return any of them.

const getFirstInstanceOfMax = (matrix: number[][]) => {
  // get first instance largets value;
  let i = 0;
  let j = 0;
  let value = -Infinity;
  matrix.forEach((row, row_i) => {
    matrix[row_i].forEach((cellItem, col_j) => {
      if (cellItem > value) {
        value = cellItem;
        i = row_i;
        j = col_j;
      }
    });
  });
  return { i, j, value }
};

const knapsackProblem = (items: [number, number][], capacity: number) => {
  let matrix: number[][] = [];
  for (let i = 0; i < Object.keys(items).length + 1; i += 1) {
    matrix.push(Array(capacity + 1).fill(0));
  }
  for (let i = 1; i < matrix.length; i += 1) {
    const [currentValue, capacity] = items[i - 1];
    for (let j = 1; j < matrix[0].length; j += 1) {
      const trailingValue = matrix[i - 1][j - capacity] + currentValue;
      const aboveValue = matrix[i - 1][j];
      if (j >= capacity) {
        if (!trailingValue) {
          if (aboveValue >= currentValue) {
            matrix[i][j] = aboveValue;
          } else {
            matrix[i][j] = currentValue;
          }
        } else {
          if (aboveValue >= trailingValue) {
            matrix[i][j] = aboveValue;
          } else {
            matrix[i][j] = trailingValue;
          }
        }
      } else {
        matrix[i][j] = aboveValue;
      }
    }
  }
  let result = [];
  let { i, j, value } = getFirstInstanceOfMax(matrix);
  const maxValue = value;
  while (j > 0 && i > 0) {
    if (matrix[i-1][j] < value) {
      result.push(i-1);
      const capacity = items[i-1][1]
      j = j - capacity;
      i = i - 1
      value = matrix[i][j];
      // move to trailing
    } else if (matrix[i-1][j] === value) {
      // move one up
      i = i - 1;
    }
  }
  return [maxValue, result.sort((a,b)=>{return a - b})]
};

