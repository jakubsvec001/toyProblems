"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processForPattern = void 0;
exports.processForPattern = (str, matchCount) => {
    let match;
    for (let i = 1; i < str.length - 1; i += 1) {
        const selection = str.slice(0, i);
        let count = 0;
        for (let j = 0; j < str.length; j += 1) {
            const testSelection = str.slice(j, j + i);
            if (testSelection === selection) {
                count += 1;
            }
            if (count === matchCount) {
                match = selection;
            }
        }
    }
    if (!match) {
        return false;
    }
    return match;
};
const isValidPattern = (xCount, yCount) => {
    if (xCount === 1 && yCount === 1)
        return false;
    if (xCount === 0 || yCount === 0)
        return false;
    return true;
};
const patternMatcher = (pattern, toMatch) => {
    const result = [];
    let xCount = 0;
    let yCount = 0;
    for (const char of pattern) {
        if (char === 'x')
            xCount += 1;
        else
            yCount += 1;
    }
    if (!isValidPattern(xCount, yCount))
        return [];
    let xMatch = exports.processForPattern(toMatch, xCount);
    if (!xMatch) {
        return [];
    }
    const filteredWithXMatch = toMatch.split(xMatch).join('');
    if (yCount === 1) {
        return [xMatch, filteredWithXMatch];
    }
    let yMatch = exports.processForPattern(filteredWithXMatch, yCount);
    if (!yMatch) {
        return [];
    }
    else {
        const filteredWithYMatch = filteredWithXMatch.split(yMatch).join('');
        if (!filteredWithYMatch.length)
            return [xMatch, yMatch];
        else
            return [];
    }
};
exports.default = patternMatcher;
console.log(patternMatcher('xyxy', 'angelinaanistonangelinaaniston'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybk1hdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXR0ZXJuTWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFhYSxRQUFBLGlCQUFpQixHQUFHLENBQUMsR0FBVyxFQUFFLFVBQWtCLEVBQUUsRUFBRTtJQUluRSxJQUFJLEtBQXlCLENBQUM7SUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDMUMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUMsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO2dCQUMvQixLQUFLLElBQUksQ0FBQyxDQUFDO2FBQ1o7WUFDRCxJQUFJLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQ3hCLEtBQUssR0FBRyxTQUFTLENBQUM7YUFDbkI7U0FDRjtLQUNGO0lBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBYSxFQUFFLE1BQWEsRUFBRSxFQUFFO0lBQ3RELElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQy9DLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sS0FBSyxDQUFDO0lBQy9DLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFBO0FBRUQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLEVBQUU7SUFDMUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBR2xCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1FBQzFCLElBQUksSUFBSSxLQUFLLEdBQUc7WUFBRSxNQUFNLElBQUksQ0FBQyxDQUFDOztZQUN6QixNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDL0MsSUFBSSxNQUFNLEdBQUcseUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsSUFBSSxNQUFNLEdBQUcseUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUNYLE9BQU8sRUFBRSxDQUFBO0tBQ1Y7U0FBTTtRQUNMLE1BQU0sa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTTtZQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7O1lBQ25ELE9BQU8sRUFBRSxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDO0FBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMifQ==