export const isLarger = (current:number[], target:number[]) => {
  let isLarger:boolean = true;
  current.forEach((currDim, i) => {
    if (currDim >= target[i]) {
      isLarger = false;
    }
  })
  return isLarger;
}

export const totalHeight = (stack:number[][]) => {
  let total = 0;
  stack.forEach((arr)=>{
    total += arr[2]
  })
  return total;
}

const diskStacking = (inputArray:number[][]):number[][] => {
  let maxHeight = -Infinity;
  let maxStack:number[][] = [];
  const traverse = (stack:number[][]) => {
    // if stack is empty, initialize the stack by filling it with arrays from the inputArray
    let nextSelection:number[]|undefined = inputArray[0];

    if (!stack.length) {
      inputArray.forEach((arr)=>{
        traverse([arr]);
      })
      
    // if stack is not empty, fill it iteratively with arrays from the inputArray that are larger than the last item in the stack.
    } else {
      nextSelection = undefined;
      const lastStackItem = stack[stack.length - 1];
      // find nextSelection by iterating across inputArray and testing if it is larger in all dimensions than the lastStackItem.
      inputArray.forEach((target)=> {
        if (isLarger(lastStackItem, target)) {
          nextSelection = target;
        }
        // if nextSelection is found, add nextSelection to stack and continue recursion (recursive case)
        if (nextSelection) {
          traverse([...stack, nextSelection]);
        // if the target item is not larger than the lastStackItem, finish recursion (base case) and check the height of the stack
        } else {
          const height = totalHeight(stack);
          // if the height is larger than the maxHeight 
          if (height > maxHeight) {
            maxHeight = height;
            maxStack = stack;
          }
        }
      })
    }
  }
  traverse([]);
  return maxStack;
}


const diskStackingDynamic = (disks:number[][]) => {
  disks.sort((a,b)=> a[2] - b[2]);
  const heights = disks.map(disk => disk[2]);
  const sequences = new Array(disks.length);
  let maxHeightIdx = 0;
  for (let leadIdx = 1; leadIdx < disks.length; leadIdx += 1) {
    const leadDisk = disks[leadIdx];
    for (let trailIdx = 0; trailIdx < leadIdx; trailIdx += 1) {
      const trailDisk = disks[trailIdx];
      if (areValidDimensions(trailDisk, leadDisk)) {
        if (heights[leadIdx] <= leadDisk[2] + heights[trailIdx]) {
          heights[leadIdx] = leadDisk[2] + heights[trailIdx];
          sequences[leadIdx] = trailIdx;
        }
      }
    }
    if (heights[leadIdx] >= heights[maxHeightIdx]) maxHeightIdx = leadIdx;
  }
  return buildSequence(disks, sequences, maxHeightIdx)
}

function areValidDimensions(a:number[], b:number[]) {
  return a[0] < b[0] && a[1] < b[1] && a[2] < b[2];
}

function buildSequence(arr:number[][], seqs:number[], currIdx:number) {
  const seq = [];
  while (currIdx !== undefined) {
    seq.unshift(arr[currIdx]);
    currIdx = seqs[currIdx];
  }
  return seq;
}

console.log(diskStackingDynamic([[2,1,2], [3,2,3], [2,2,8], [2,3,4], [1,3,1], [4,4,5]]))

export default diskStacking;