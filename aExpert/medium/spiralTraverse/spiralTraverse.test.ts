import spiralTraverse, { multi } from './spiralTraverse';

let array;
let result;


interface ex {
  matrix: multi;
  output: number[];
}

const ex0 = {
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

const ex1 = {
  matrix: [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ],
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
};

const ex2 = {
  matrix: [
    [1, 2, 3, 4],
    [14, 15, 16, 5],
    [13, 20, 17, 6],
    [12, 19, 18, 7],
    [11, 10, 9, 8]
  ],
  output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
};


const tests: ex[] = [ex0, ex1, ex2]

describe('base case tests', () => {
  tests.forEach((test, i) => {
    it(`ex${i}`, () => {
      expect(spiralTraverse(test.matrix)).toEqual(test.output);
    });
  });
});
