const  { productSum } = require('./productSum')

it('Test Case #1', function () {
  const test = [1, 2, 3, 4, 5];
  expect(productSum(test)).toBe(15);
});

it('Test Case #2', function () {
  const test = [1, 2, [3], 4, 5];
  expect(productSum(test)).toBe(18);
});

it('Test Case #3', function () {
  const test = [[1, 2], 3, [4, 5]];
  expect(productSum(test)).toBe(27);
});

it('Test Case #4', function () {
  const test = [[[[[5]]]]];
  expect(productSum(test)).toBe(600);
});

it('Test Case #5', function () {
  const test = [
    9,
    [2, -3, 4],
    1,
    [1, 1, [1, 1, 1]],
    [[[[3, 4, 1]]], 8],
    [1, 2, 3, 4, 5, [6, 7], -7],
    [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
    [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
    -3,
  ];
  expect(productSum(test)).toBe(1351);
});

it('Test Case #6', function () {
  const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  expect(productSum(test)).toBe(12);
});
