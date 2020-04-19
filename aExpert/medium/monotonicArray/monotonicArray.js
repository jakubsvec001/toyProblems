/*
given an array, return a boolean for its monotinicicity
*/

const monotonicArray = (inputArray) => {
  // if inputArray length <= two && inputArray length > 0, return true

  // use first two points to define positive or negative slope
  let initialSlope = inputArray[0] < inputArray[1]; // true = positive, false = negative
  let currentSlope;
  for (let a = 1; a < inputArray.length; a += 1) {
    currentSlope = inputArray[a - 1] < inputArray[a];
    if (initialSlope !== currentSlope) {
      return false
    }
  }
  return true;
}

console.log(monotonicArray([1,2,5,4]))

module.exports = { monotonicArray };