/**
 * 
 */
const twoNumberSum = (inputArray, targetSum) => {
  const dir = {};
  let diffTarget;
  let result;
  // fill directory with key = number and value = [indexes]
  inputArray.forEach((item, i) => {
    if (dir[item]) dir[item].push(i);
    else dir[item] = [i];
  })
  // iterate through array again, find diffTarget in directory
  for (let i = 0; i <= inputArray.length - 1; i += 1 ) {
    // calculate difference target
    diffTarget = targetSum - inputArray[i];
    // if diffTarget in directory, check for same index 
    if (dir[diffTarget]) {
      result = [inputArray[i], diffTarget] 
      // if the directory contains only one index entry for the diffTarget, and our current index is not the same as the index entry: 
      if (dir[diffTarget].length === 1 && i !== dir[diffTarget][0]) {
        // return [inputArray[i], targetDiff]
        return result;
      // else if directory contains more than one index entry:
      } else if (dir[diffTarget].length > 1){
        // return [currentIndex, targetDiff]
        return result;
      } 
    }
  }
  return []
}

// { 
//   '1': [ 5 ],
//   '3': [ 0 ],
//   '5': [ 1, 8 ],
//   '6': [ 7 ],
//   '8': [ 3 ],
//   '11': [ 4 ],
//   '-4': [ 2 ],
// } target 10 -> return -1, 11

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

module.exports = { twoNumberSum }