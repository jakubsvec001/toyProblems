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

describe('processForPattern', () => {
  it('1', () => {
    expect(processForPattern('gogopowerrangergogopowerranger', 4)).toEqual('go')
    expect(processForPattern('powerrangerpowerranger', 2)).toEqual('powerranger')
  })
})


