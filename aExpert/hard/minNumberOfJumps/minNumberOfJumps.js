"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxOptions = void 0;
exports.getMaxOptions = (subArray) => {
    let maxIdx = 0;
    let maxValue = subArray[maxIdx];
    let maxDist = maxValue + maxIdx;
    subArray.forEach((item, i) => {
        if (item + i > maxDist) {
            maxDist = item + i;
            maxIdx = i;
            maxValue = item;
        }
    });
    return [maxValue, maxIdx];
};
const minNumberOfJumps = (array) => {
    let iteration = 0;
    if (array.length < 2) {
        return iteration;
    }
    const targetIndex = array.length - 1;
    let currIndex = 0;
    let currSteps = array[currIndex];
    let subArray;
    let value, idx;
    let remaining;
    while (currIndex < targetIndex) {
        if (currSteps >= targetIndex - currIndex) {
            iteration += 1;
            break;
        }
        subArray = array.slice(currIndex + 1, currIndex + currSteps + 1);
        [value, idx] = exports.getMaxOptions(subArray);
        currSteps = value;
        currIndex = currIndex + idx + 1;
        iteration += 1;
    }
    return iteration;
};
const minNumberOfJumpsDynamicSimple = (array) => {
    const dynamicArray = Array(array.length).fill(Infinity);
    dynamicArray[0] = 0;
    let i = 1;
    while (i < array.length) {
        for (let j = 0; j < i; j += 1) {
            if (array[j] + j >= i) {
                dynamicArray[i] = Math.min(dynamicArray[i], dynamicArray[j] + 1);
            }
        }
        i += 1;
    }
    return dynamicArray[dynamicArray.length - 1];
};
const minNumberofJumpsDynamicFast = (array) => {
    let jumps = 0;
    let maxReach = array[0];
    let steps = array[0];
    for (let i = 0; i < array.length; i += 1) {
        maxReach = Math.max(maxReach, array[i] + i);
        steps -= 1;
        if (steps === 0) {
            jumps += 1;
            steps = maxReach - i;
        }
    }
    return jumps + 1;
};
console.log(minNumberofJumpsDynamicFast([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
exports.default = minNumberOfJumps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluTnVtYmVyT2ZKdW1wcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pbk51bWJlck9mSnVtcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR2EsUUFBQSxhQUFhLEdBQUcsQ0FBQyxRQUFrQixFQUFlLEVBQUU7SUFDL0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLElBQUksT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFlLEVBQUUsRUFBRTtJQUUzQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsSUFBSSxRQUFrQixDQUFDO0lBQ3ZCLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUNmLElBQUksU0FBUyxDQUFDO0lBQ2QsT0FBTyxTQUFTLEdB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