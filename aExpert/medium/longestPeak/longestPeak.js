/* Write a function that takes in an array of integers and returns the length of the longest peak in the array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.
FOr example, the integers [1, 4,10, 2] form a peak, but the integers [4, 0, 10] dont and neither do the integers [1,2,2,0]. Similarly, the integers [1,2,3] don't form a peak because they aren't strictly decreasing integers after 3

sample input:

array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]

sample output:
6 // 0, 10, 6, 5, -1, -3
*/

const longestPeak = (arr) => {
  let up = false;
  let peak = false;
  let max = 0;
  let tempMax = 0;
  let run = 0;
  let current;
  let next;
  let i;
  for (i = 0; i < arr.length - 2; i += 1) {

  return max;
};

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(array));

module.exports = { longestPeak };