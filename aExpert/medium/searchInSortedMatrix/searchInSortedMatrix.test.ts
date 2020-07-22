import { matrixTests, divideTests } from './testCases';
import searchInSortedMatrix from './searchInSortedMatrix';

describe('searchInSortedMatrix', () => {
  for (let key in matrixTests) {
    let test = matrixTests[key];
    it(`${key}`, () => {
      expect(searchInSortedMatrix(test.matrix, test.target)).toEqual(test.output);
    });
  }
});

// describe('divideAndConquer', () => {
//   for (let key in divideTests) {
//     let test = divideTests[key];
//     it (`${key}`, () => {
//       expect(divideAndConquer(test.array, test.target)).toBe(test.output);
//     })
//   }
// })

