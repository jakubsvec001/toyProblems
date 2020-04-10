// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.
  let state = str1.length - str2.length;
  arr1 = str1.split('');
  arr2 = str2.split('');
  let a = 0;
  let b = 0;
  let editCount = 0;
  let aChar;
  let bChar;
  while (b < arr2.length) {
    aChar = arr1[a];
    bChar = arr2[b];
    console.log(arr1, arr2)
    // if we need to modify
    if (aChar !== bChar) {
      // if we need to add
      if (state < 0) {
        // addition and increment both
        arr1.splice(a, 0, arr2[b])
        a += 1
        b += 1
        editCount += 1;
        state += 1
        console.log('addition')
      // if we need to delete
      } else if (state > 0) {
        // deletion and don't increment
        arr1.splice(a, 1)
        console.log(a, b)
        a += 0
        b += 0
        editCount += 1;
        state -= 1
        console.log('deletion')
      // else replacement and increment
      } else {
        arr1.splice(a, 1, arr2[b])
        a += 1
        b += 1
        editCount += 1;
        console.log('replacement')
      }
    // if equal, do nothing but iterate both
    } else {
      a += 1;
      b += 1
    }
  }
  return editCount;
}

// console.log(editDistance('abcd', 'acd')) //1 deletion
// console.log(editDistance('acd', 'abcd')) //1 addition
// console.log(editDistance('azcd', 'abcd')) //1 replace
// console.log(editDistance('axyzcd', 'acd'))  //3, three deletions
// console.log(editDistance('axyzcd', 'aczd')) // 4, three deletions and 1 addition
// console.log(editDistance('xyzcd', 'aczd')) // 4, three deletions and 1 addition
// console.log(editDistance('axyzcxd', 'acd'))  //4, 4 deletions
console.log(editDistance('wednesday', 'sunday')) // 5
// One condition where they are equal length
// One condition where first is longer than second
// one condition where first is shorter than second