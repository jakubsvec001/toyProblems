"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const caesarCipher_js_1 = __importDefault(require("./caesarCipher.js"));
const ex0 = {
    word: 'abcdefg',
    key: 0,
    output: 'abcdefg',
};
const ex1 = {
    word: 'abcdefg',
    key: 2,
    output: 'cdefghi',
};
const ex2 = {
    word: 'abc',
    key: 26,
    output: 'abc'
};
const ex3 = {
    word: 'abcd',
    key: 27,
    output: 'bcde',
};
const ex4 = {
    word: 'abcd',
    key: 5003,
    output: 'lmno',
};
const ex5 = {
    word: 'xyz',
    key: 2,
    output: 'zab',
};
const tests = [ex0, ex1, ex2, ex3, ex4];
describe('base cases', () => {
    it('1', () => {
        tests.forEach((test) => {
            expect(caesarCipher_js_1.default(test.word, test.key)).toBe(test.output);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Flc2FyQ2lwaGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWVzYXJDaXBoZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHdFQUFzRDtBQVF0RCxNQUFNLEdBQUcsR0FBRztJQUNWLElBQUksRUFBRSxTQUFTO0lBQ2YsR0FBRyxFQUFFLENBQUM7SUFDTixNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFBO0FBRUQsTUFBTSxHQUFHLEdBQUc7SUFDVixJQUFJLEVBQUUsU0FBUztJQUNmLEdBQUcsRUFBRSxDQUFDO0lBQ04sTUFBTSxFQUFFLFNBQVM7Q0FDbEIsQ0FBQTtBQUVELE1BQU0sR0FBRyxHQUFHO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsRUFBRTtJQUNQLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUVELE1BQU0sR0FBRyxHQUFHO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsRUFBRTtJQUNQLE1BQU0sRUFBRSxNQUFNO0NBQ2YsQ0FBQTtBQUVELE1BQU0sR0FBRyxHQUFHO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsSUFBSTtJQUNULE1BQU0sRUFBRSxNQUFNO0NBQ2YsQ0FBQTtBQUVELE1BQU0sR0FBRyxHQUFHO0lBQ1YsSUFBSSxFQUFFLEtBQUs7SUFDWCxHQUFHLEVBQUUsQ0FBQztJQUNOLE1BQU0sRUFBRSxLQUFLO0NBQ2QsQ0FBQTtBQUNELE1BQU0sS0FBSyxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRWxELFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyx5QkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=