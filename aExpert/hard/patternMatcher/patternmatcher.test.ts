import patternMatcher, { processForPattern } from './patternMatcher';
import tests from './tests';

describe('patternMatcher', () => {
  for (const key in tests){
    const test = tests[key];
    it(`${key}`, () => {
      const [pattern, toMatch] = test.input;
      expect(patternMatcher(pattern, toMatch)).toEqual(test.output);
    })
  }
})




