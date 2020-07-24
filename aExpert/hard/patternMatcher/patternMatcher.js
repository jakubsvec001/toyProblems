"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patternMatcher = (pattern, toMatch) => {
    const firstPattern = pattern[0];
    let secondPattern;
    for (const char of pattern) {
        if (char !== firstPattern) {
            secondPattern = char;
        }
    }
    let firstPatternCount = 0;
    let secondPatternCount = 0;
    for (const char of pattern) {
        if (char === firstPattern)
            firstPatternCount += 1;
        if (char === secondPattern)
            secondPatternCount += 1;
    }
};
exports.default = patternMatcher;
console.log(patternMatcher('xyxy', 'angelinaanistonangelinaaniston'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybk1hdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYXR0ZXJuTWF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWFBLE1BQU0sY0FBYyxHQUFHLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxFQUFFO0lBQzFELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJLGFBQWEsQ0FBQztJQUNsQixLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFBQztRQUN6QixJQUFJLElBQUksS0FBSyxZQUFZLEVBQUU7WUFDekIsYUFBYSxHQUFHLElBQUksQ0FBQztTQUN0QjtLQUNGO0lBQ0QsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDMUIsSUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDM0IsS0FBSyxNQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7UUFDMUIsSUFBSSxJQUFJLEtBQUssWUFBWTtZQUFFLGlCQUFpQixJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksS0FBSyxhQUFhO1lBQUUsa0JBQWtCLElBQUksQ0FBQyxDQUFDO0tBQ3JEO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDO0FBRTlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMifQ==