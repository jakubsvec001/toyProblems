interface testInterface {
  [key: string]: {
    input: number[][];
    output: number[];
  };
}

const tests:testInterface = {
  1: {
    input: [
      [1,0,0,1,0],
      [1,0,1,0,0],
      [0,0,1,0,1],
      [1,0,1,0,1],
      [1,0,1,1,0]
    ],
    output: [1,2,2,2,5],
  },
  2: {
    input: [
      [1,1,1],
      [1,1,1],
      [1,1,1],
      [1,1,1],
    ],
    output: [12],
  },
  3: {
    input: [
      [],
    ],
    output: []
  },
  4: {
    input: [
      [0,0,0,0],
    ],
    output: []
  },
  5: {
    input: [
      [1,0,1,1],
    ],
    output: [1, 2]
  },
  6: {
    input: [
      [1],
      [0],
      [1],
      [1],
    ],
    output: [1, 2]
  },
  7: {
    input: [
      [0, 1, 0, 1],
      [1, 1, 0, 1],
      [1, 0, 1, 1],
      [1, 1, 1, 0],
    ],
    output: [11]
  },
}

export { tests, testInterface }