/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  // sort from largest to smallest
  const sorted = array.sort((a, b) => {
    return b - a;
  });
  console.log([sorted[0], sorted[1], sorted[2]])
  return sorted[0] * sorted[1] * sorted[2]
};

// console.log(largestProductOfThree([2, 1, 3, 7]));

// console.log(largestProductOfThree([2, 3, 5]));
// console.log(largestProductOfThree([7, 5, 3]));
// console.log(largestProductOfThree([7, 5, 7]));
// console.log(largestProductOfThree([2, 5, 3, 7]));
// console.log(largestProductOfThree([11, 7, 5, 3, 2]));
// console.log(largestProductOfThree([2, 13, 7, 3, 5, 11]));
// console.log(largestProductOfThree([2, 11, 13, 7, 13, 3, 11, 5]));
console.log(largestProductOfThree([2, 3, -11, 7, 5, -13]));
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]))
console.log(largestProductOfThree([-1, -2, -3, -4, -5, -6]))