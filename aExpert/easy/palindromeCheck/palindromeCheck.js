"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palindromeCheck = (str) => {
    let result = true;
    if (str.length === 0)
        return false;
    let p1 = 0;
    let p2 = str.length - 1;
    while (p1 < p2) {
        if (str[p1] !== str[p2])
            return false;
        p1 += 1;
        p2 -= 1;
    }
    return result;
};
exports.default = palindromeCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsaW5kcm9tZUNoZWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFsaW5kcm9tZUNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsTUFBTSxlQUFlLEdBQUcsQ0FBQyxHQUFXLEVBQVUsRUFBRTtJQUM5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEIsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNuQyxJQUFJLEVBQUUsR0FBVSxDQUFDLENBQUM7SUFDbEIsSUFBSSxFQUFFLEdBQVUsR0FBRyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ2QsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ3RDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDUixFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Q7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUE7QUFFRCxrQkFBZSxlQUFlLENBQUMifQ==