import riverSizes from './riverSizes';
import { tests, testInterface } from './tests';



describe('tests', () => {
  for (let test in tests) {
    it(`${tests[test]}`, () => {
      expect(riverSizes(tests[test].input).sort((a, b) => a-b)).toEqual(tests[test].output)
    })
  } 
})