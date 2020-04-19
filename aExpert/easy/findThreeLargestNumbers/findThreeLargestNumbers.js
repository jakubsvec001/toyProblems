/**
 * given an array of integers, return a sorted array of the three largest integers. 
 * Do not sort the input array.
 */
const findThreeLargestNumbers = (array) => {
  const tuple = [-Infinity];
  let arrayNum;
  let tupleNum;
  let nextTupleNum;
  for (let i = 0; i < array.length; i += 1) {
    arrayNum = array[i];
    if (arrayNum > tuple[0]) {
      // iterate across tuple array, call each iterated item tupleNum
      // keep track of nextTupleNum as well
      for (let j = 0; j <= tuple.length; j += 1) {
        tupleNum = tuple[j];
        nextTupleNum = tuple[j + 1]
        // if the arrayNum is >= arrayNum and the nextTupleNum doesn't exist:
        if (arrayNum >= tupleNum && nextTupleNum === undefined) {
          //splice the arrayNum into the tuple array just beyond our current position
          tuple.splice(j + 1, 0, arrayNum);
          //stop inserting into tuple
          break;
        }
        else if (arrayNum >= tupleNum && arrayNum <= nextTupleNum) {
          tuple.splice(j + 1, 0, arrayNum)
          break;
        }
      }
      // trim if necessary
      if (tuple.length > 3) {
        tuple.shift()
      }
    }
  }
  // filter for -Infinity values in tuple
  return tuple.filter((item) => item !== -Infinity);
}

console.log(findThreeLargestNumbers([5,1,2,4,3]))
console.log(findThreeLargestNumbers([15,5,9,10,12]))
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))

module.exports = { findThreeLargestNumbers }