/*
Determine if array 2 is a subsequence of array 1. A subsequence is a sequence that maintains the same order, but not necessarily adjacency 
example: 
array1 = [5,1,22,25,6,-1,8,10]
array2 = [1,6,-1,10]
output = true
*/

const validateSubsequence = (array1, array2) => {
  let i = 0;
  let val1;
  let val2;
  while (i < array1.length) {
    val1 = array1[i];
    val2 = array2[0];
    if (val1 === val2) {
      array2.shift();
    }
    i += 1;
  }
  if (array2.length > 0) {
    return false
  }
  return true;
}

console.log(validateSubsequence([5,1,22,25,6,-1,8,10], [1,22,6,-1,25]))

module.exports = { validateSubsequence };