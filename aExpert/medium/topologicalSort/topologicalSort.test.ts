import topologicalSort from './topologicalSort';

describe('topologicalSort', () => {
  test('0', () => {
    expect(
      topologicalSort(
        [1, 2, 3, 4],
        [
          [1, 2],
          [1, 3],
          [3, 2],
          [4, 2],
          [4, 3],
        ],
      ),
    ).toEqual([1, 4, 3, 2]); // || [4,1,3,2]
  });
  test('1', () => {
    expect(
      topologicalSort(
        [1, 2, 3, 4],
        [
          [1, 5],
          [1, 3],
          [3, 2],
          [4, 2],
          [4, 3],
        ],
      ),
    ).toEqual([]);
  });
  test('2', () => {
    expect(
      topologicalSort(
        [1, 2, 3, 4, 5],
        [
          [5, 1],
          [5, 3],
          [5, 2],
          [5, 4],
          [3, 4],
          [4, 1],
          [3, 2],
          [2, 1],
        ],
      ),
    ).toEqual([5,3,2,4,1]);
  });
});
