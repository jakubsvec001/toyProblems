"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.move = exports.every = void 0;
exports.every = (arr) => {
    return arr.reduce((prev, next) => {
        return prev && next;
    }, true);
};
exports.move = (arr, currIdx, currVal) => {
    let wrappedIdx;
    let targetIdx = currIdx + currVal;
    if (targetIdx > arr.length - 1) {
        wrappedIdx = targetIdx % arr.length;
    }
    else if (targetIdx < 0) {
        let reverseWrap = targetIdx % arr.length;
        if (reverseWrap === 0) {
            return 0;
        }
        wrappedIdx = arr.length + reverseWrap;
    }
    else {
        wrappedIdx = targetIdx;
    }
    return wrappedIdx;
};
const hasSingleCycle = (array) => {
    const visited = Array(array.length).fill(false);
    let singleCycle = true;
    array.forEach((num, i) => {
        visited[i] = false;
    });
    let currIdx = 0;
    let currVal = array[0];
    let complete;
    while (singleCycle) {
        currVal = array[currIdx];
        if (visited[currIdx]) {
            singleCycle = false;
            break;
        }
        visited[currIdx] = true;
        complete = exports.every(visited);
        if (complete) {
            break;
        }
        currIdx = exports.move(array, currIdx, currVal);
    }
    return singleCycle;
};
exports.default = hasSingleCycle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlQ3ljbGVDaGVjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbmdsZUN5Y2xlQ2hlY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSWEsUUFBQSxLQUFLLEdBQUcsQ0FBQyxHQUFhLEVBQUUsRUFBRTtJQUNyQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDL0IsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDO0lBQ3RCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtBQUNWLENBQUMsQ0FBQTtBQUdZLFFBQUEsSUFBSSxHQUFHLENBQ2xCLEdBQWEsRUFDYixPQUFlLEVBQ2YsT0FBZSxFQUNQLEVBQUU7SUFDVixJQUFJLFVBQWtCLENBQUM7SUFDdkIsSUFBSSxTQUFTLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNsQyxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM5QixVQUFVLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7S0FDckM7U0FBTSxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7UUFDeEIsSUFBSSxXQUFXLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUE7S0FDdEM7U0FBTTtRQUNMLFVBQVUsR0FBRyxTQUFTLENBQUM7S0FDeEI7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQWUsRUFBVyxFQUFFO0lBQ2xELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztJQUN2QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksUUFBUSxDQUFDO0lBQ2IsT0FBTyxXQUFXLEVBQUU7UUFDbEIsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQixXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLE1BQU07U0FDUDtRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDeEIsUUFBUSxHQUFHLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU07U0FDUDtRQUNELE9BQU8sR0FBRyxZQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLGtCQUFlLGNBQWMsQ0FBQyJ9