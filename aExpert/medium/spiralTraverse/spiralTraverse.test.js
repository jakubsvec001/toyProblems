const { spiralTraverse } = require('./spiralTraverse');

let array;
let result;

describe('base case tests', () => {
  it('1', () => {
    array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    expect(spiralTraverse(array)).toEqual(result);
  });
  it('2', () => {
    array = [
      [1, 2, 3, 4, 5],
      [14, 15, 16, 17, 6],
      [13, 20, 19, 18, 7],
      [12, 11, 10, 9, 8],
    ];
    result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  })
});
