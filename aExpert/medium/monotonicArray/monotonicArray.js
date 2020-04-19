/*
given an array, return a boolean for its monotinicicity
*/

const monotonicArray = (inputArray) => {
  // if inputArray length <= two && inputArray length > 0, return true
  if (inputArray.length <= 2) return true;
  // use first two points to define positive or negative slope
  let increasing = true,
      decreasing = true,
      currentSlope;
  for (let a = 1; a < inputArray.length; a += 1) {
    // if comparison is the same, continue
    if (inputArray[a] !== inputArray[a-1]) {
      currentSlope = inputArray[a] < inputArray[a-1];
      if (currentSlope) {
        decreasing = false
        if (!decreasing && !increasing) return false;
      } else {
        increasing = false;
        if (!decreasing && !increasing) return false;
      }
    }
  }
  return true;
}

console.log(monotonicArray([1,2,5,4]))
console.log(monotonicArray([300, -1, 3, 1000]))
console.log(monotonicArray([-1,-1,-2,-3,-4,-5,-5,-5,-6,-7,-8,-8,-9,-10,-11]))

module.exports = { monotonicArray };