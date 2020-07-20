import { tests, testInterface } from './tests';
import kadanesAlgorithm from './kadanesAlgorthm';

describe('', () => {
  let testItem;
  for (let test in tests) {
    it ('test', () => {
      expect(kadanesAlgorithm(tests[test].input)).toEqual(tests[test].output);
    })
  }
})