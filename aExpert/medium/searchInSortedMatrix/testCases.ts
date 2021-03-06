interface ImatrixTests {
  [key: string]: {
    matrix: number[][];
    target: number;
    output: [number, number];
  };
}
const matrixTests: ImatrixTests = {
  0: {
    matrix: [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    target: 44,
    output: [3, 3],
  },
  1: {
    matrix: [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    target: 43,
    output: [-1, -1],
  },
  2: {
    matrix: [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ],
    target: 1,
    output: [0, 0],
  },
};

interface IdivideTests {
  [key: string]: {
    array: number[];
    target: number;
    output: boolean;
  }
}

const divideTests: IdivideTests = {
  0: {
    array: [3, 8, 24, 33, 35, 1002],
    target: 33,
    output: true,
  },
  1: {
    array: [3, 8, 24, 33, 35, 1002],
    target: 32,
    output: false,
  }
}

export { matrixTests, divideTests };
