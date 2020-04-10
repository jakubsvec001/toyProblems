/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  const firsts = [];
  const counts = {};
  for (let char of string){
    counts[char] = (counts[char] || 0) + 1
    counts[char] === 1 && firsts.push(char)
  }
  for (let char of firsts){
    if (counts[char] === 1){
      return char
    }
  }
  return null
};

console.log('A => A', firstNonRepeatedCharacter('A'))
console.log('AACBDB => C', firstNonRepeatedCharacter('AACBDB'))
console.log('AACCBDB => D', firstNonRepeatedCharacter('AACCBDB'))
console.log('AACCBDDBE => E', firstNonRepeatedCharacter('AACCBDDBE'))
console.log("'' => ", null, firstNonRepeatedCharacter(''))
