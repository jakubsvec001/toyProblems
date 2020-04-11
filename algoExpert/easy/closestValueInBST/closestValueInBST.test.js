const { BST, findClosestValueInBst }  = require('./closestValueInBST')

describe('base cases', () => {

  const tree = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

  test('Test Case #1', () => {
    expect(findClosestValueInBst(tree, 100)).toBe(100);
  });

  test('Test Case #2', () => {
    expect(findClosestValueInBst(tree, 208)).toBe(208);
  });

  test('Test Case #3', () => {
    expect(findClosestValueInBst(tree, 4500)).toBe(4500);
  });

  test('Test Case #4', () => {
    expect(findClosestValueInBst(tree, 4501)).toBe(4500);
  });

  test('Test Case #5', () => {
    expect(findClosestValueInBst(tree, -70)).toBe(-51);
  });

  test('Test Case #6', () => {
    expect(findClosestValueInBst(tree, 2000)).toBe(1001);
  });

  test('Test Case #7', () => {
    expect(findClosestValueInBst(tree, 6)).toBe(5);
  });

  test('Test Case #8', () => {
    expect(findClosestValueInBst(tree, 30000)).toBe(55000);
  });

  test('Test Case #9', () => {
    expect(findClosestValueInBst(tree, -1)).toBe(1);
  });

  test('Test Case #10', () => {
    expect(findClosestValueInBst(tree, 29751)).toBe(55000);
  });

  test('Test Case #11', () => {
    expect(findClosestValueInBst(tree, 29749)).toBe(4500);
  });
});