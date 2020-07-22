import tests from './testCases';
import searchInSortedMatrix from './searchInSortedMatrix';

describe('searchInSortedMatrix', () => {
  for (let key in tests) {
    let test = tests[key];
    it(`${key}`, () => {
      expect(searchInSortedMatrix(test.matrix, test.target)).toBe(test.output)
    })
  }
})
