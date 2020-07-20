// Given a non-empty array of positive integers where each integer represents a maximum number of jumps allowed, write a function that returns the minimum number of jumps required to reach the final index;

export type optionTuple = [number, number];
export const getMaxOptions = (subArray: number[]): optionTuple => {)
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
  let subArray:number[];
  let value, idx;
  let remaining;
  while (currIndex < targetIndex) {
    remaining = array.slice(currIndex + 1);
    if (currSteps >= remaining.length) {
      iteration += 1;
      break
    }
    subArray = array.slice(currIndex + 1, currIndex + currSteps + 1);
    [value, idx] = getMaxOptions(subArray);
    currSteps = value;
    currIndex = currIndex + idx + 1;
    iteration += 1; 
  }
  return iteration;
};

// console.log(getMaxOptions([4,1,1,1,1]))
// console.log(minNumberOfJumps([3,1000,2,1,2,3,7,1,1,1,3]));

// console.log(getMaxOptions([1, 1, 1, 3, 2, 6, 2]))
export default minNumberOfJumps;
