// Given a non-empty array of positive integers where each integer represents a maximum number of jumps allowed, write a function that returns the minimum number of jumps required to reach the final index;

export type optionTuple = [number, number];
export const getMaxOptions = (subArray: number[]): optionTuple => {
  let maxIdx = 0;
  let maxValue = subArray[maxIdx];
  let maxDist = maxValue + maxIdx;
  subArray.forEach((item, i) => {
    if (item + i > maxDist) {
      maxDist = item + i;
      maxIdx = i;
      maxValue = item;
    }
  });
  return [maxValue, maxIdx];
};

const minNumberOfJumps = (array: number[]) => {
  // edge case of single item:
  let iteration = 0;
  if (array.length < 2) {
    return iteration;
  }
  const targetIndex = array.length - 1;
  let currIndex = 0;
  let currSteps = array[currIndex];
  let subArray: number[];
  let value, idx;
  let remaining;
  while (currIndex < targetIndex) {
    if (currSteps >= targetIndex - currIndex) {
      iteration += 1;
      break;
    }
    subArray = array.slice(currIndex + 1, currIndex + currSteps + 1);
    [value, idx] = getMaxOptions(subArray);
    currSteps = value;
    currIndex = currIndex + idx + 1;
    iteration += 1;
  }
  return iteration;
};

const minNumberOfJumpsDynamicSimple = (array: number[]) => {
  const dynamicArray = Array(array.length).fill(Infinity);
  dynamicArray[0] = 0;
  let i = 1;
  while (i < array.length) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] + j >= i) {
        dynamicArray[i] = Math.min(dynamicArray[i], dynamicArray[j] + 1);
      }
    }
    i += 1;
  }
  return dynamicArray[dynamicArray.length - 1];
};
// console.log(getMaxOptions([4,1,1,1,1]))
// console.log(minNumberOfJumps([3,1000,2,1,2,3,7,1,1,1,3]));


const minNumberofJumpsDynamicFast = (array: number[]) => {
  // edge case of single item:
  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];
  for (let i = 0; i < array.length; i += 1) {
    maxReach = Math.max(maxReach, array[i] + i)
    steps -= 1;
    if (steps === 0) {
      jumps += 1;
      steps = maxReach - i
    }
  }
  return jumps + 1;
};


// console.log(minNumberOfJumpsDynamicSimple([1, 1, 1, 3, 2, 6, 2]));
console.log(minNumberofJumpsDynamicFast([3,4,2,1,2, 3,7,1,1,1,3]))
export default minNumberOfJumps;
