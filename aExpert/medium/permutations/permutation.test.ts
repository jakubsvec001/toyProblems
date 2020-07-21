import { deepSort } from '../powerset/tests';
import getPermutations from './permutations';

describe('permutations', () => {
  it('1', () => {
    expect(getPermutations([1, 2, 3])).toEqual(
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    );
  });
  it('2', () => {
    expect(getPermutations([1, 2, 3, 4])).toEqual(
      [ [ 1, 2, 3, 4 ],
      [ 1, 2, 4, 3 ],
      [ 1, 3, 2, 4 ],
      [ 1, 3, 4, 2 ],
      [ 1, 4, 2, 3 ],
      [ 1, 4, 3, 2 ],
      [ 2, 1, 3, 4 ],
      [ 2, 1, 4, 3 ],
      [ 2, 3, 1, 4 ],
      [ 2, 3, 4, 1 ],
      [ 2, 4, 1, 3 ],
      [ 2, 4, 3, 1 ],
      [ 3, 1, 2, 4 ],
      [ 3, 1, 4, 2 ],
      [ 3, 2, 1, 4 ],
      [ 3, 2, 4, 1 ],
      [ 3, 4, 1, 2 ],
      [ 3, 4, 2, 1 ],
      [ 4, 1, 2, 3 ],
      [ 4, 1, 3, 2 ],
      [ 4, 2, 1, 3 ],
      [ 4, 2, 3, 1 ],
      [ 4, 3, 1, 2 ],
      [ 4, 3, 2, 1 ] ]
    );
  });
  it('', () => {
    expect(getPermutations([1])).toEqual(
      [[1]]
    );
  });
});
