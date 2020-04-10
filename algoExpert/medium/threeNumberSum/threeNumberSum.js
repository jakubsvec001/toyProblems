// https://www.algoexpert.io/questions/Three%20Number%20Sum

// integers in an array are distinct
// integers can be positive & negative
// find all sets of three integers that sum to the target sum
// return 2d array of triplet integers (each array is sorted in ascending order)
// if no three integers sum to the target, return empty array

/**
 * create empty result array
 * create L pointer, R pointer,
 * sort the array (O(log(n)))
 * set base (B) pointer to beginning of array
 * WHILE B item is < targetSum OR B pointer is not at the end of the array:
 * * SET L pointer to be B pointer + 1
 * * SET R pointer to be L pointer + 1
 * * LOOP array.length - R pointer times:
 * * * SET tempItem to B item + L item + R item
 * * * IF tempItem === targetSum:
 * * * * push [B item, L item, R item] into result
 * * * * break loop
 * * * ELSE IF tempItem > target:
 * * * * break loop
 * * * ELSE:
 * * * * INCREMENT R pointer
 * * INCREMENT L pointer + 1
 * * SET R pointer to L pointer + 1;
 * @param {*} array 
 * @param {*} targetSum 
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

