/* Write a function that takes in an array of integers and returns the length of the longest peak in the array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the peak), at which point they become strictly decreasing. At least three integers are required to form a peak.
FOr example, the integers [1, 4,10, 2] form a peak, but the integers [4, 0, 10] dont and neither do the integers [1,2,2,0]. Similarly, the integers [1,2,3] don't form a peak because they aren't strictly decreasing integers after 3

sample input:

array = [1,2,3,3,4,0,10,6,5,-1,-3,2,3]

sample output:
6 // 0, 10, 6, 5, -1, -3
*/

const longestPeak = (arr: number[]): number => {
  let up = false;
  let peak = false;
  let plateau = false;
  let finalMax = 0;
  let runMax = 0;
  let current;
  let next;
  let i;

  // iterate all the way to the second to last item in the array
  for (i = 0; i < arr.length - 1; i += 1) {
    current = arr[i];
    next = arr[i + 1];
    // if window is a plateau, move on to next window
    if (current === next) {
      plateau = true;
    };

    // if current window is upward slope:
    if (current < next) {
      // if not going up and we reach the beginning of a potential peak, potentially set finalMax, reset runMax to 1, reset peak
      if (!up) {
        if (peak) {
          if (runMax > finalMax) finalMax = runMax;
        }
        runMax = 1;
        peak = false;
      }
      // if already going up, increment runMax;
      runMax += 1;
      up = true;
      plateau = false;
    }
    
    // if window is downward slope
    if (current > next) {
      // if no peak has formed yet, set peak to true
      if (!peak && !plateau && runMax !== 0) peak = true;
      if (plateau) runMax = 0;
      if (peak) runMax += 1
      up = false;
      plateau = false;
    }
  }
  if (runMax > finalMax && peak) finalMax = runMax;
  return finalMax;
};


const ex1 = {
  input: [0, 1, 2, 2, 0],
  output: 0,
}

const ex8 = {
  input: [1, 2, 3, 3, 2, 1],
  output: 0,
}

// console.log(longestPeak(ex1.input))
console.log(longestPeak(ex8.input))
export default longestPeak;
