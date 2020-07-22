"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalHeight = exports.isLarger = void 0;
exports.isLarger = (current, target) => {
    let isLarger = true;
    current.forEach((currDim, i) => {
        if (currDim >= target[i]) {
            isLarger = false;
        }
    });
    return isLarger;
};
exports.totalHeight = (stack) => {
    let total = 0;
    stack.forEach((arr) => {
        total += arr[1];
    });
    return total;
};
const diskStacking = (inputArray) => {
    let maxHeight = -Infinity;
    let maxStack = [];
    const traverse = (stack) => {
        let nextSelection = inputArray[0];
        if (!stack.length) {
            inputArray.forEach((arr) => {
                traverse([arr]);
            });
        }
        else {
            nextSelection = undefined;
            const lastStackItem = stack[stack.length - 1];
            inputArray.forEach((target) => {
                if (exports.isLarger(lastStackItem, target)) {
                    nextSelection = target;
                }
                if (nextSelection) {
                    traverse([...stack, nextSelection]);
                }
                else {
                    const height = exports.totalHeight(stack);
                    if (height > maxHeight) {
                        maxHeight = height;
                        maxStack = stack;
                    }
                }
            });
        }
    };
    traverse([]);
    return maxStack;
};
console.log(diskStacking([[2, 1, 2], [3, 2, 3], [2, 2, 8], [2, 3, 4], [1, 3, 1], [4, 4, 5]]));
exports.default = diskStacking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlza1N0YWNraW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGlza1N0YWNraW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxNQUFlLEVBQUUsRUFBRTtJQUM1RCxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUM7SUFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUM3QixJQUFJLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUU7SUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBQyxFQUFFO1FBQ25CLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDRixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQTtBQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsVUFBcUIsRUFBYSxFQUFFO0lBQ3hELElBQUksU0FBUyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzFCLElBQUksUUFBUSxHQUFjLEVBQUUsQ0FBQztJQUM3QixNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtRQUVwQyxJQUFJLGFBQWEsR0FBc0IsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ2pCLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRTtnQkFDeEIsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtTQUdIO2FBQU07WUFDTCxhQUFhLEdBQUcsU0FBUyxDQUFDO1lBQzFCLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRTlDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUMsRUFBRTtnQkFDM0IsSUFBSSxnQkFBUSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFDbkMsYUFBYSxHQUFHLE1BQU0sQ0FBQztpQkFDeEI7Z0JBRUQsSUFBSSxhQUFhLEVBQUU7b0JBQ2pCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7aUJBRXJDO3FCQUFNO29CQUNMLE1BQU0sTUFBTSxHQUFHLG1CQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRWxDLElBQUksTUFBTSxHQUFHLFNBQVMsRUFBRTt3QkFDdEIsU0FBUyxHQUFHLE1BQU0sQ0FBQzt3QkFDbkIsUUFBUSxHQUFHLEtBQUssQ0FBQztxQkFDbEI7aUJBQ0Y7WUFDSCxDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQyxDQUFBO0lBQ0QsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQyxDQUFBO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVqRixrQkFBZSxZQUFZLENBQUMifQ==