import shortenPath from './shortenPath';
import tests from './tests';



describe('shortenPath', () => {
  for (const key in tests) {
    const test = tests[key];
    it(`${key}`, () => {
      expect(shortenPath(test.input)).toBe(test.output)
    });
  }
})