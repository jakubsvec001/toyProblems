// https://www.algoexpert.io/questions/Three%20Number%20Sum

// integers in an array are distinct
// integers can be positive & negative
// find all sets of three integers that sum to the target sum
// return 2d array of triplet integers (each array is sorted in ascending order)
// if no three integers sum to the target, return empty array

/**
 * create empty result array
 * @param {Array} array
 * @param {Int} targetSum
 * @returns {Array} - a 2D array
 */
function threeNumberSum(array, targetSum) {
  const result = [];
  let a;
  let b;
  let c;
  let tempSum;
  let leftPointer;
  let rightPointer;
  let newLeft;
  let newRight;
  let middlePointer;
  let binSearch;
  if (array.length === 0) return [];
  const sorted = array.sort((num1, num2) => num1 - num2);
  for (let i = 0; i <= sorted.length - 3; i += 1) {
    a = sorted[i];
    for (let j = i + 1; j <= sorted.length - 2; j += 1) {
      b = sorted[j];
      leftPointer = j + 1;
      rightPointer = sorted.length - 1;
      binSearch = (leftPointer, rightPointer) => {
        if (leftPointer > rightPointer) return;
        middlePointer = Math.floor((leftPointer + rightPointer) / 2);
        c = sorted[middlePointer];
        tempSum = a + b + c;
        if (tempSum === targetSum) result.push([a, b, c]);
        else {
          newLeft = middlePointer + 1;
          newRight = middlePointer - 1;
          if (tempSum < targetSum) binSearch(newLeft, rightPointer);
          else binSearch(leftPointer, newRight);
        }
      };
      binSearch(leftPointer, rightPointer);
    }
  }
  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0));

// Do not edit the line below.
module.exports = { threeNumberSum };
