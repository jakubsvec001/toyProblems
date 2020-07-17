// write a function that takes an array of positive integers and returns the maximum sum of non-adjacent elements in the array
import * as _ from 'lodash';

const maxSubsetSumNoAdjacent = (array: number[]) => {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  const maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < maxSums.length; i += 1) {
    maxSums[i] = Math.max(maxSums[i-1], maxSums[i - 2] + array[i]);
  }
  return maxSums[maxSums.length-1];
};

const test1 = {
  input: [75, 105, 120, 75, 90, 135],
  output: 330,
};

const test2 = {
  input: [1, 2, 3, 4, 5, 6],
  output: 9,
};

console.log(maxSubsetSumNoAdjacent(test1.input));

export default maxSubsetSumNoAdjacent;
