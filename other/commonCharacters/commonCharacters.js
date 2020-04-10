/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(...args) {
  let result = args[0].split('');
  args.slice(1).forEach( (string) => {
    result = result.filter( (char) => [...new Set(string.split(''))].includes(char))
  })
  return result.join('')
}
console.log(commonCharacters('acexivou', 'egihaaaaaiabu', 'ie'))

