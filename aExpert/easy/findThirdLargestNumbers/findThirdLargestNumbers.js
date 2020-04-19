/**
 * given an array of integers, return a sorted array of the three largest integers. 
 * Do not sort the input array.
 */
const findThreeLargestNumbers = (array) => {
  const tuple = [-Infinity];
  let arrayNum;
  let tupleNum;
  for (let i = 0; i < array.length; i += 1) {
    arrayNum = array[i];
    if (arrayNum > tuple[0]) {
      // iterate across tuple array, call each iterated item tupleNum
      for (let j = 0; j < tuple; j += 1) {
        tupleNum = tuple[j];
        // if arrayNum is less than the tupleNum,
        if (arrayNum < tupleNum) {
          //splice the arrayNum into the tuple array
          tuple.splice(j, 0, arrayNum);
          //if tuple array length is greater than 3:
          if (tuple.length > 3) {
            //shift the tuplearray to delete the smallest item.
            tuple.shift()
          }
        }
      }
    }
  }
  return tuple;
}

console.log(findThreeLargestNumbers([5,1,2,4,3]))

module.exports = { findThreeLargestNumbers };