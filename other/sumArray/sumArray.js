/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 * 
 * sumArray([1,2,3,-5,4,5,6]).should.equal(16);
 * sumArray([1,2,3,-5,4,5,6]).should.equal(16);
 * sumArray([1,2,3,-4,5,-4,5,-4]).should.equal(8);
 * sumArray([1,2,3,-4,5,-4,5,-4,-4]).should.equal(8);
 * sumArray([1,2,3,-4,5,-4,5,-4,-4,-1]).should.equal(8);
 * sumArray([1,2,3,-4,5,-4,5,-4,-4,10]).should.equal(10);
 * sumArray([-5,2,3]).should.equal(5);
 * sumArray([-5,-5,-5,2,3]).should.equal(5);
 * sumArray([-3,-2,-1,-2,-3]).should.equal(-1);
 * sumArray([99]).should.equal(99);
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  if (array.length === 1){
    return array[0]
  }
  let start
  // first non-negative number:
  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= 0) {
      start = i
      break
    }
  }
  if (start === undefined) {
    return Math.max(...array)
  }
  let res = array[start];
  let tempRes = array[start];
  for (let i = start+1; i < array.length; i += 1) {
    tempRes += array[i]
    if (tempRes > res) {
      // console.log('tempRes', tempRes)
      res = tempRes
      lastIdx = i;
    }
  }
  return res
};

console.log(16, sumArray([1,2,3,-5,4,5,6]))
console.log(16, sumArray([1,2,3,-5,4,5,6]))
console.log(8, sumArray([1,2,3,-4,5,-4,5,-4]))
console.log(8, sumArray([1,2,3,-4,5,-4,5,-4,-4]))
console.log(8, sumArray([1,2,3,-4,5,-4,5,-4,-4,-1]))
console.log(10, sumArray([1,2,3,-4,5,-4,5,-4,-4,10]))
console.log(5, sumArray([-5,2,3]))
console.log(5, sumArray([-5,-5,-5,2,3]))
console.log(-1, sumArray([-3,-2,-1,-2,-3]))
console.log(99, sumArray([99]))