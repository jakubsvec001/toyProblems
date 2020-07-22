// groupAnagrams consumes an array of strings and returns an array of arrays containing strings of grouped anagrams
const groupAnagrams = (array:string[]):string[][] => {
  if (!array.length) {
    return [];
  }
  // initialize an object to store anagram fingerprints
  interface Ifingerprints {
    [key: string]: string[];
  }
  const fingerprints:Ifingerprints = {}
  for (let word of array) {
    // split word string into array of character strings
    const arr = word.split('');
    // sort array of strings by charCode
    arr.sort((a, b) => {
      if (a.charCodeAt(0) < b.charCodeAt(0)) {
        return -1;
      } else {
        return 1;
      }
    })
    // add sorted array of strings to fingerprints object (create as necessary). Test using serialization of array. Store key as serialized sorted array. Store the word in an array
    const serialized:string = arr.join('');
    if (fingerprints[serialized]) {
      fingerprints[serialized].push(word);
    } else {
      fingerprints[serialized] = [word];
    }
  }
  return Object.values(fingerprints);
}

console.log(groupAnagrams(['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp']));

export default groupAnagrams;