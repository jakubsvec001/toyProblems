const lengthOfLongestSubstring = require('./longestSubstringNoRepeats');

console.log(lengthOfLongestSubstring);

const inputs = ['abcabcbb', 'bbbbb', 'pwwkew'];
const outputs = [3, 1, 3];

test('input abcabccb', () => {
  expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
});


test('input bbbbb', () => {
  expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
});

test('input pwwkew', () => {
  expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
});

test('input string length 0', () => {
  expect(lengthOfLongestSubstring('')).toBe(0)
})