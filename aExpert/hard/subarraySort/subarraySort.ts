// Write a function that takes in an array of at least two integers and return the indexes of the starting and ending indexes that define the smallest subarray that needs to be sorted in place in order for the entire input array to be sorted. The sort is expect to occur in ascending order.

const subarraySort = (array:number[]):[number, number] => {
  let beginningUnsortedIdx = -Infinity;
  let endingUnsortedIdx = Infinity;
  let unsortedMin = Infinity;
  let unsortedMax = -Infinity;
  let minIdx = 0;
  let maxIdx = array.length - 1;
  //find beginning of unsorted area
  for (let i = 1; i < array.length; i += 1) {
    if (!(array[i-1] <= array[i])){
      beginningUnsortedIdx = i - 1;
      break;
    }
  }
  // find end of unsorted area
  for (let i = array.length - 2; i >= 0; i -= 1) {
    if (!(array[i] <= array[i + 1])){
      endingUnsortedIdx = i + 1;
      break;
    }
  }
  // return early if sorted already
  if (beginningUnsortedIdx === -Infinity && endingUnsortedIdx === Infinity) {
    return [-1, -1]
  }
  // find min of upper area
  for (let i = beginningUnsortedIdx; i < array.length; i += 1) {
    if (array[i] < unsortedMin) unsortedMin = array[i];
  }
  // find max of lower area
  for (let i = 0; i < endingUnsortedIdx; i += 1) {
    if (array[i] > unsortedMax) unsortedMax = array[i]
  } 
  
  // in the lower sorted area, find the index of the first value that is greater than the minimum of the unsorted area min
  for (let i = 0; i < endingUnsortedIdx; i += 1) {
    if (array[i] > unsortedMin) {
      minIdx = i;
      break;
    }
  }
  // in the upper sorted area, find the index of the first value that is greater than the maximim of the unsorted area max and subtract 1;
  for (let i = array.length -1; i > minIdx; i -= 1) {
    if (array[i] < unsortedMax) {
      maxIdx = i;
      break
    }
  }
  // return [lower min index, upper min index];
  return [minIdx, maxIdx];
}

export default subarraySort;