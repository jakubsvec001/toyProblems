/**
 * Write a function that takes in two non-empty arrays of integers, finds the pair of numbers (one from each array) whose absolute difference is closest to zero, and return an array containing these two numbers, whith the numbers from the first array in the first position
 * 
 * You can assume that there will only be one pair of numbers with the smallest difference
 * 
 * @param {Array} arrayOne 
 * @param {Array} arrayTwo 
 * @returns {Array}
 */
function smallestDifference(arrayOne, arrayTwo) {
  // sort arrays
  const arr1 = arrayOne.sort((a, b) => a - b)
  const arr2 = arrayTwo.sort((a, b) => a - b);
  console.log(arr1, arr2)
  // initialize variables
  let l;
  let r;
  let middle;
  let lNum;
  let rNum;
  let tempDiff
  let smallestDiff = Infinity;
  let result;
  // loop over first array
  for (let i = 0; i <= arr1.length - 1; i += 1) {
    lNum = arr1[i];
    const binarySearch = (l, r) => {
      if (l > r) return;
      middle = Math.floor((l + r) / 2);
      rNum = arr2[middle];
      tempDiff = lNum - rNum;
      tempDiffAbs = Math.abs(tempDiff)
      if (tempDiffAbs < smallestDiff) {
        smallestDiff = Math.abs(lNum - rNum) 
        result = [lNum, rNum];
      }
      if (tempDiff < 0) {
        binarySearch(l, middle - 1)
      } else {
        binarySearch(middle + 1, r);
      }
    }
    // binary search smallest difference from second array
    binarySearch(0, arr2.length - 1);
  }
  return result;
}

/**
 * [-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]  => [28, 26]
 * [ -1, 3, 5, 10, 20, 28 ] [ 15, 17, 26, 134, 135 ]
 *                  i
 *                            l
 *                                              r
 *                                     m
 */
console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]))

module.exports = { smallestDifference };