import longestPeak from './longestPeak.js';

interface ex {
  input: number[],
  output: number,
}

const ex0:ex = {
  input: [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3],
  output: 6,
}
const ex1:ex = {
  input: [0, 1, 2, 2, 0],
  output: 0,
}
const ex2:ex = {
  input: [1, 4, 10, 2],
  output: 4,
}

// flat start that doesn't count
const ex3:ex = {
  input: [0,0,0,1,2,3,2,3],
  output: 5,
}

// flat start that doesn't count, plus plateu that doesn't count
const ex4:ex = {
  input: [0,0,0,1,2,2,2,3,2,3],
  output: 5,
}
//smallest peak
const ex5:ex = {
  input: [0,1,0],
  output: 3,
}
//slope
const ex6:ex = {
  input: [0,1],
  output: 0,
}
//valley
const ex7:ex = {
  input: [1,0,1,2],
  output: 0,
}

const ex8:ex = {
  input: [1, 2, 3, 3, 2, 1],
  output: 0,
}

const tests = [ex0, ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8];

describe('base cases', () => {

  tests.forEach((item, i) => {
    it(`${i}`, () => {
      expect(longestPeak(item.input)).toBe(item.output);
    })
  })
});
