
/**
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

Input: [1,8,6,2,5,4,8,3,7]
Output: 49
 */
const getArea = (array, L, R) => {
  const smaller = Math.min(array[L], array[R])
  const length = R - L;
  return smaller * length;
}

const containerWithMostWater = (array) => {
  let biggest = 0;
  let L = 0;
  let R = array.length - 1;
  let area;
  while (L < R) {
    area = getArea(array, L, R)
    if (area > biggest) {
      biggest = area;
    }
    if (array[L] > array[R]) {
      R -= 1;
    } else {
      L += 1;
    }
  }
  return biggest;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
module.exports = { containerWithMostWater, getArea };

