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
        remaining = array.slice(currIndex + 1);
        if (currSteps >= remaining.length) {
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
exports.default = minNumberOfJumps;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluTnVtYmVyT2ZKdW1wcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1pbk51bWJlck9mSnVtcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR2EsUUFBQSxhQUFhLEdBQUcsQ0FBQyxRQUFrQixFQUFlLEVBQUU7SUFDL0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLElBQUksT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsT0FBTyxFQUFFO1lBQ3RCLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFlLEVBQUUsRUFBRTtJQUUzQyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNwQixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUNELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDakMsSUFBSSxRQUFpQixDQUFDO0lBQ3RCLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQztJQUNmLElBQUksU0FBUyxDQUFDO0lBQ2QsT0FBTyxTQUFTLEdBQUcsV0FBVyxFQUFFO1FBQzlCLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2pDLFNBQVMsSUFBSSxDQUFDLENBQUM7WUFDZixNQUFLO1NBQ047UUFDRCxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcscUJBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFNBQVMsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoQyxTQUFTLElBQUksQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBTUYsa0JBQWUsZ0JBQWdCLENBQUMifQ==