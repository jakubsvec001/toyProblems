export interface testInterface {
  [key: string]: {
    input: number[],
    output: number[],
  }
}

export const tests:testInterface = {
  1: {
    input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4],
    output: [1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1],
  },
  2: {
    input: [-3, -4, -4, -5, -1000, -1],
    output: [-1],
  },
  3: {
    input: [-3, -4, -4, -5, -1000, -1, 0],
    output: [0],
  }
}