/**
 * I: two, non-empty strings
 *      the first input consists of either x's or y's for each character in the strings
 *      the second input consists of standard alphanumeric characters
 * O: a string representing whether the second string matches the pattern in the first string (see below for details)
 * C: O(n^2+m) time && O(n+m) space
 * E: There will never be more than one pair of strings s1 and s2 that represent 'x' and 'y' in the second string
 *
 * if the inputs do not pass the patternMatcher test, return an empty array ([])
 * if the inputs match: return an array holding the strings 's1' and 's2' that represnt 'x' and 'y' in the normal string.
 */


const patternMatcher = (pattern: string, toMatch: string) => {
  const firstPattern = pattern[0];
  let secondPattern;
  for (const char of pattern){
    if (char !== firstPattern) {
      secondPattern = char;
    }
  }
  let firstPatternCount = 0;
  let secondPatternCount = 0;
  for (const char of pattern) {
    if (char === firstPattern) firstPatternCount += 1;
    if (char === secondPattern) secondPatternCount += 1;
  }
};

export default patternMatcher;

console.log(patternMatcher('xyxy', 'angelinaanistonangelinaaniston'));
