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

// input string to process
export const processForPattern = (str: string, matchCount: number) => {
  // iterate through different lengths of first potential match
  // ie: 'g', 'go', 'gog', 'gogo', 'gogop', gogopo'

  let match: string | undefined;

  for (let i = 1; i < str.length - 1; i += 1) {
    const selection = str.slice(0, i);
    let count = 0;
    for (let j = 0; j < str.length; j += 1) {
      const testSelection = str.slice(j, j + i);
      if (testSelection === selection) {
        count += 1;
      }
      if (count === matchCount) {
        match = selection;
      }
    }
  }
  if (!match) {
    return false;
  }
  return match;
};

const isValidPattern = (xCount:number, yCount:number) => {
  if (xCount === 1 && yCount === 1) return false;
  if (xCount === 0 || yCount === 0) return false;
  return true;
}

const patternMatcher = (pattern: string, toMatch: string) => {
  const result = [];
  // store count of x
  // store count of y
  let xCount = 0;
  let yCount = 0;
  for (const char of pattern) {
    if (char === 'x') xCount += 1;
    else yCount += 1;
  }
  if (!isValidPattern(xCount, yCount)) return [];
  let xMatch = processForPattern(toMatch, xCount);
  if (!xMatch) {
    return [];
  }
  // filter out xMatch
  const filteredWithXMatch = toMatch.split(xMatch).join('');
  if (yCount === 1 ){
    return [xMatch, filteredWithXMatch];
  }
  let yMatch = processForPattern(filteredWithXMatch, yCount);
  if (!yMatch) {
    return []
  } else {
    const filteredWithYMatch = filteredWithXMatch.split(yMatch).join('');
    if (!filteredWithYMatch.length) return [xMatch, yMatch];
    else return [];
  }
};

export default patternMatcher;

console.log(patternMatcher('xyxy', 'angelinaanistonangelinaaniston'));
