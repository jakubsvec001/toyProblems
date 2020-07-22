import groupAnagrams from './groupAnagrams';

describe('groupAnagrams', () => {
  it('1', () => {
    expect(groupAnagrams(['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp'])).toEqual([ [ 'yo', 'oy' ], [ 'act', 'tac', 'cat' ], [ 'flop', 'olfp' ] ]);
  });
  it('2', () => {
    expect(groupAnagrams(['a', 'b', 'ab', 'bc'])).toEqual([['a'], ['b'], ['ab'], ['bc']])
  })
  it('3', () => {
    expect(groupAnagrams([])).toEqual([])
  })
})