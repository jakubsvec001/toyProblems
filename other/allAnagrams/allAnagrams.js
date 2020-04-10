/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */



const getAllAnagrams = (string) => {
  if (string.length === 1){
    return [string];
  }
  let stackResult = []
  for (let i = 0; i < string.length; i++){
    let rest = string.split('');
    const letter = rest.splice(i, 1);
    let substacks = getAllAnagrams(rest.join(''))
    console.log(substacks)
    for (let substack of substacks){
      stackResult.push(letter + substack)
    }
  }
  return stackResult;
}

var allAnagrams = function(string) {
  const all = getAllAnagrams(string)
  return [...new Set(all)]
};


let stackNumber = 0

var allAnagrams = function(string) {
  // Your code here.
  // Base Cases
  if (string.length === 1) {
    return [string];
  }
  // create results array
  var anagrams = [];
  // create an anagram variable
  // for every letter in the string
  for (let i = 0; i < string.length; i++) {
    // create a string without the current letter being used
    var nextString = string.slice(0, i) + string.slice(i + 1);
    // DELETE THIS LINE AND ADD BELOW:
    // anagrams.push( string[i].concat(allAnagrams(nextString) ));

    // GET RESULTS OF YOUR SUBSTACKS:
    var substacks = allAnagrams(nextString);
    // CLEAN UP / HANDLE THE RESULTS OF YOUR RECURSIVE CALL TO MERGE WITH YOUR CURRENT STACK
    for (let substack of substacks){
      console.log('string[i]', string[i], 'substack', substack)
      anagrams.push(string[i] + substack)
    }
  }
  return anagrams;
};
console.log(allAnagrams('abcd'))