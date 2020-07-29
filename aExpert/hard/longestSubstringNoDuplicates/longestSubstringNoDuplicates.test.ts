import longestSubstringWithoutDuplication from './longestSubstringNoDuplicates';

describe('longestSubstringWithoutDuplication', () => {
  it('0', () => {
    expect(longestSubstringWithoutDuplication('clementisacap')).toBe('mentisac');
  });
  it('1', () => {
    expect(longestSubstringWithoutDuplication('abcdefabcdefg')).toBe('abcdefg');
  });
  it('2', () => {
    expect(longestSubstringWithoutDuplication('abcdefabcde')).toBe('abcdef');
  })
})