import maxSubsetNoAdjacent from './maxSubsetSumNoAdjacent'
import * as _ from 'lodash';

interface ex {
  [key: string]: {
    input: number[];
    output: number;
  }
}

const tests:ex = {
  test1: {
    input: [75, 105, 120, 75, 90, 135],
    output: 330,
  },
  test2: {
    input: [1, 3, 4],
    output: 5,
  },
  test3: {
    input: [1, 5, 3],
    output: 5,
  }
}


describe('test suite 1', () => {
  _.forEach(tests, (item, i) => {
    it(`${i}`, () => {
      expect(maxSubsetNoAdjacent(item.input)).toBe(item.output);
    })
  })
})