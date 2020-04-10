/**
 * https://leetcode.com/problems/zigzag-conversion/
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"


Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I

Input: s = "PAYPALISHIRING", numRows = 5
Output: "PHASIYIRPLIGAN"
Explanation:

P       H
A     S I
Y   I   R
P L     I G
A       N

Input: s = "PAYPALISHIRING", numRows = 6
Output: "PRAIIYHNPSGAIL"
Explanation:

P         R
A       I I
Y     H   N
P   S     G
A I
L

Input: s = "PAYPALISHIRING", numRows = 1
Output: ""
Explanation:

PAYPALISHIRING




 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const _ = require('lodash');


function transpose(matrix) {
  return Object.keys(matrix[0]).map(function(c) {
      return matrix.map(function(r) { return r[c]; });
  });
}

var zigZagConversion = function(s, numRows) {
  // handle edge cases
  if (!s || numRows === 1) return s;
  if (numRows <= 1) return null;
  let strArray = s.split('');
  const matrix = [];
  while (strArray.length !== 0) {
    let tempArray = [];
    for (let i = 0; i < numRows; i++) {
      tempArray.push(strArray.shift());
    }
    matrix.push(tempArray);
    for (let i = 2; i < numRows; i += 1) {
      var temp = Array(numRows).fill();
      temp[temp.length - i] = strArray.shift();
      matrix.push(temp);
    }
  }
  let transposed = transpose(matrix)
  return transposed.map((row) => {
    return row.filter( item => !!item).join('')
  }).join('');
};

console.log(zigZagConversion("PAYPALISHIRING", 3))

module.exports = { zigZagConversion };
