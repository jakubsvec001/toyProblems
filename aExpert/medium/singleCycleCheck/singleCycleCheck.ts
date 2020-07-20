import * as _ from 'lodash';
// each item in a given array (non-empty) represents the next iteration's move. Return a boolean indicating whether the integers provided in the array form a sequence that visits each index once. Then array wraps, such that moving beyond the bounds of the array wraps to the other side;


export const every = (arr:boolean[]) => {
  return arr.reduce((prev, next) => {
    return prev && next;
  }, true)
}


export const move = (
  arr: number[],
  currIdx: number,
  currVal: number,
): number => {
  let wrappedIdx: number;
  let targetIdx = currIdx + currVal;
  if (targetIdx > arr.length - 1) {
    wrappedIdx = targetIdx % arr.length;
  } else if (targetIdx < 0) {
    let reverseWrap = targetIdx % arr.length; // how many from the end? 
    if (reverseWrap === 0) {
      return 0;
    }
    wrappedIdx = arr.length + reverseWrap
  } else {
    wrappedIdx = targetIdx;
  }
  return wrappedIdx;
};

const hasSingleCycle = (array: number[]): boolean => {
  const visited = Array(array.length).fill(false);
  let singleCycle = true;
  array.forEach((num, i) => {
    visited[i] = false;
  });
  let currIdx = 0;
  let currVal = array[0];
  let complete;
  while (singleCycle) {
    currVal = array[currIdx];
    if (visited[currIdx]) {
      singleCycle = false;
      break;
    }
    visited[currIdx] = true;
    complete = every(visited);
    if (complete) {
      break;
    }
    currIdx = move(array, currIdx, currVal);
  }
  return singleCycle;
};

export default hasSingleCycle;

console.log(hasSingleCycle([1,1,1,1,2]))