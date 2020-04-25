/**
 * return the minimum edit distance between two strings
 * The only operations allowed are: insert character, delete character, and substitute character. Each operation counts a 1 edit.
 * @param {*} str1
 * @param {*} str2
 */

const levenshteinDistance = (str1, str2) => {
  if (str1.length < str2.length) {
    let temp = str1;
    str1 = str2;
    str2 = temp;
  }
  let operations = ['-', '*', '+'];
  let minCount = Infinity;
  // recursive function:
  const traverse = (str1, str2, editCount) => {
    // if not beyond a known minimum:
    if (editCount < minCount) {
      // and if the rest of the string matches successfully:
      if (str1 === str2) {
        // set the minCount to the editCount if
        if (editCount < minCount) {
          minCount = editCount;
        }
        // if the rest of the string is not a match
      } else if (str1 === '') {
        traverse('', '', editCount + str2.length);
      } else if (str2 === '') {
        traverse('', '', editCount + str1.length);
        // otherwise perform edits as necessary on subsequent characters
      } else {
        // check if characters are the same to see if we can skip editing the character
        let newStr1 = str1.split('').splice(1).join('');
        let newStr2 = str2.split('').splice(1).join('');
        if (str1[0] === str2[0]) {
          //if the same, continue down the stack, shift both strings, don't increment editCount;
          traverse(newStr1, newStr2, editCount);
          // if characters not the same, perform an edit
        } else {
          for (let operation of operations) {
            // delete
            if (operation === '-') {
              traverse(newStr1, str2, editCount + 1);
              // swap
            } else if (operation === '*') {
              traverse(newStr1, newStr2, editCount + 1);
              // add
            } else {
              traverse(str1, newStr2, editCount + 1);
            }
          }
        }
      }
    }
  };
  traverse(str1, str2, 0);
  return minCount;
};

console.log(levenshteinDistance('cabc', 'yabz')); 

module.exports = { levenshteinDistance };
