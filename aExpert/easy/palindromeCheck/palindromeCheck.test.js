"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const palindromeCheck_js_1 = __importDefault(require("./palindromeCheck.js"));
const ex1 = {
    word: 'palindrome',
    output: false,
};
const ex2 = {
    word: 'abba',
    output: true,
};
const ex3 = {
    word: 'abcba',
    output: true,
};
const ex4 = {
    word: '',
    output: false,
};
describe('base cases', () => {
    it('1', () => {
        expect(palindromeCheck_js_1.default(ex1.word)).toBe(ex1.output);
        expect(palindromeCheck_js_1.default(ex2.word)).toBe(ex2.output);
        expect(palindromeCheck_js_1.default(ex3.word)).toBe(ex3.output);
        expect(palindromeCheck_js_1.default(ex4.word)).toBe(ex4.output);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFsaW5kcm9tZUNoZWNrLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWxpbmRyb21lQ2hlY2sudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhFQUFrRDtBQVFsRCxNQUFNLEdBQUcsR0FBTTtJQUNiLElBQUksRUFBRSxZQUFZO0lBQ2xCLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUVELE1BQU0sR0FBRyxHQUFNO0lBQ2IsSUFBSSxFQUFFLE1BQU07SUFDWixNQUFNLEVBQUUsSUFBSTtDQUNiLENBQUE7QUFFRCxNQUFNLEdBQUcsR0FBTTtJQUNiLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFBO0FBRUQsTUFBTSxHQUFHLEdBQU07SUFDYixJQUFJLEVBQUUsRUFBRTtJQUNSLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUVELFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsTUFBTSxDQUFDLDRCQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsNEJBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyw0QkFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLDRCQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=