/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */


var binarySearch = function(array, target) {
  let result;
  function recurse(array, left = 0, right = array.length - 1){
    if (left <= right) {
      let midIdx = left + Math.floor((right - left) / 2);
      if (array[midIdx] === target){
        result = midIdx;
      } else {
        if (array[midIdx] < target){
          recurse(array, midIdx + 1, right)
        } else {
          recurse(array, left, midIdx-1)
        }
      }
    }
  }
  recurse(array, 0);
  if (result === 0){
    return 0;
  } 
  return result || null;
};


var binarySearch = function(array, target, left = 0, right = array.length - 1) {
  if (array.length < 1 || !Array.isArray(array)){
    return null;
  }
  let result;
  if (left <= right) {
    let midIdx = left + Math.floor((right - left) / 2);
    if (array[midIdx] === target){
      result = midIdx;
    } else {
      if (array[midIdx] < target){
        result = binarySearch(array, target, midIdx + 1, right)
      } else {
        result = binarySearch(array, target, left,  midIdx - 1)
      }
    }
    if (result === 0){
      return 0;
    }
    return result || null;
  } 
};



