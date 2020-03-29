/**
 * https://leetcode.com/problems/container-with-most-water/
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var containerMostWater = function(height) {
  // helper function to get array of current maximum height visited
  const getHighest = (arr) => {
    let highest = arr[0]; 
    return arr.map((peak) => {
      if (peak > highest) {
        highest = peak
      }
      return highest;
    })
  }
  // get maximums forward
  const forward = getHighest(height);
  // get maxiumums backward
  const backward = getHighest(height.reverse());
  // variable instantiation
  let largestArea = 0;
  let min;
  let area;
  // O(n^2) nested loops to test for largest area
  forward.forEach((iPeak, i) => {
    backward.forEach((jPeak, j) => {
      min = Math.min(iPeak, jPeak)
      area = ((height.length - 1 - j) - i) * min
      if (area > largestArea) {
        largestArea = area
      }
    }) 
  })
  return largestArea
};

module.exports = containerMostWater;