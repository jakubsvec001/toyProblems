/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   X You should allow a negative value for 'step' to count backwards.
 *   X If no step is provided, it should default to 1.
 *   X If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


var Range = function(start, end, step=1) {
  if (start > end && step > 0) {
    this.start = end;
    this.end = start;
    this.step = -step;
  } else if ( start > end ) {
    this.start = end;
    this.end = start;
    this.step = step;
  } else {
    this.start = start
    if (end) this.end = end;
    else this.end = start;
    this.step = step;
  }
  this.iterations = 0;
};

Range.prototype.size = function () {
  if (this.start === undefined) return null;
  // inclusive range calculation
  return Math.floor((this.end - this.start) / this.step) + 1
};

Range.prototype.each = function (callback) {
  if (this.start === undefined) return null;
  if (this.step > 0){
    console.log('forward order')
    for (let i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else {
    console.log('revered order')
    for (let i = this.end; i >= this.start; i += this.step) {
      callback(i)
    }
  }
};

Range.prototype.includes = function (val) {
  if (this.start === undefined) return null;
  let isIncluded = false;
  this.each((index) => {
    if (index === val) isIncluded = true;
  })
  return isIncluded
};

var range = new Range(1);


//null tests

// const nullTest = new Range(undefined, 3, 2);
// console.log('nullTest=null', nullTest.each())
// console.log('nullTest=null', nullTest.includes())
// console.log('nullTest=null', nullTest.size())


var countdown = new Range(10, 0, -1);
var elements = [];
countdown.each(function (val) {
  elements.push(val);
});
console.log(elements)

var countdown = new Range(10, 0);
var elements = [];
countdown.each(function (val) {
  elements.push(val);
});
console.log(elements)

var countdown = new Range(10, 0, -2); // Let's count down by twos
var elements = [];
countdown.each(function (val) {
  elements.push(val);
});
console.log(elements)


// swaps if start bigger than end, makes steps negative
const swapTest1 = new Range(4, 1, 2)
console.log('swapTest1', swapTest1.each((i) => console.log(i)))
const swapTest2 = new Range(4, 1, -2)
console.log('swapTest2', swapTest2.each((i) => console.log(i)))
// .includes() tests
// const includesTest1 = new Range(1, 4);
// console.log('includesTest1=true, [should breaks early as well maybe?]', includesTest1.includes(2))
// const includesTest2 = new Range(1, 4);
// console.log('includesTest2=false', includesTest2.includes(99999))

// // .size() tests
// const sizeTest1 = new Range(1, 4);
// console.log('sizeTest1=4', sizeTest1.size()); // ===  4 ([1, 2, 3, 4])
// const sizeTest2 = new Range(1, 5, 2);
// console.log('sizeTest2=3', sizeTest2.size()); // === 3 ([1, 3, 5])
// const sizeTest3 = new Range(1, 6, 2);
// console.log('sizeTest3=3', sizeTest3.size()); // === 3 ([1, 3, 5])
// const sizeTest4 = new Range(1, 7, 2);
// console.log('sizeTest4=4', sizeTest4.size()); // === 4 ([1, 3, 5, 7])
// const sizeTest5 = new Range(1, 8, 2);
// console.log('sizeTest5=4', sizeTest5.size()); // === 4 ([1, 3, 5, 7])
// const sizeTest6 = new Range(1, 9, 2);
// console.log('sizeTest6=5', sizeTest6.size()); // === 5 ([1, 3, 5, 7, 9])

//test size with negative steps
const sizeTestNeg1 = new Range(1, 9, -2);
console.log('sizeTestNeg1=5', sizeTestNeg1.size()); // === 5 ([1, 3, 5, 7, 9])

// // .each() tests
// const eachTest1 = new Range(1, 4);
// console.log('eachTest1=[1, 2, 3, 4]', eachTest1.each((index)=> console.log(index))); // ===  4 ([1, 2, 3, 4])
// const eachTest2 = new Range(1, 5, 2);
// console.log('eachTest2=[1, 3, 5]', eachTest2.each((index)=> console.log(index))); // === 3 ([1, 3, 5])
// const eachTest3 = new Range(1, 6, 2);
// console.log('eachTest3=[1, 3, 5]', eachTest3.each((index)=> console.log(index))); // === 3 ([1, 3, 5])
// const eachTest4 = new Range(1, 7, 2);
// console.log('eachTest4=[1, 3, 5, 7]', eachTest4.each((index)=> console.log(index))); // === 4 ([1, 3, 5, 7])
// const eachTest5 = new Range(1, 8, 2);
// console.log('eachTest5=[1, 3, 5, 7]', eachTest5.each((index)=> console.log(index))); // === 4 ([1, 3, 5, 7])
// const eachTest6 = new Range(1, 9, 2);
// console.log('eachTest6=[1, 3, 5, 7, 9]', eachTest6.each((index)=> console.log(index))); // === 5 ([1, 3, 5, 7, 9])
