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
  if (array.length === 0) return [];
  const sorted = array.sort((num1, num2) => num1 - num2);
  console.log(sorted)
}


console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0))

// Do not edit the line below.
module.exports = { threeNumberSum };

