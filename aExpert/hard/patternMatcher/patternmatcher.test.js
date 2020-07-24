"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patternMatcher_1 = __importDefault(require("./patternMatcher"));
const tests_1 = __importDefault(require("./tests"));
describe('patternMatcher', () => {
    for (const key in tests_1.default) {
        const test = tests_1.default[key];
        it(`${key}`, () => {
            const [pattern, toMatch] = test.input;
            expect(patternMatcher_1.default(pattern, toMatch)).toEqual(test.output);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybm1hdGNoZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdHRlcm5tYXRjaGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRUFBOEM7QUFDOUMsb0RBQTRCO0FBRTVCLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsS0FBSyxNQUFNLEdBQUcsSUFBSSxlQUFLLEVBQUM7UUFDdEIsTUFBTSxJQUFJLEdBQUcsZUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRTtZQUNoQixNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDdEMsTUFBTSxDQUFDLHdCQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQTtLQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUEifQ==