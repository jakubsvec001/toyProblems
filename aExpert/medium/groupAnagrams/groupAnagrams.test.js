"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const groupAnagrams_1 = __importDefault(require("./groupAnagrams"));
describe('groupAnagrams', () => {
    it('1', () => {
        expect(groupAnagrams_1.default(['yo', 'act', 'flop', 'tac', 'cat', 'oy', 'olfp'])).toEqual([['yo', 'oy'], ['act', 'tac', 'cat'], ['flop', 'olfp']]);
    });
    it('2', () => {
        expect(groupAnagrams_1.default(['a', 'b', 'ab', 'bc'])).toEqual([['a'], ['b'], ['ab'], ['bc']]);
    });
    it('3', () => {
        expect(groupAnagrams_1.default([])).toEqual([]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBBbmFncmFtcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvdXBBbmFncmFtcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0VBQTRDO0FBRTVDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBQzdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsTUFBTSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBRSxJQUFJLEVBQUUsSUFBSSxDQUFFLEVBQUUsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRSxFQUFFLENBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFFLENBQUMsQ0FBQztJQUNwSixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsTUFBTSxDQUFDLHVCQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkYsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUNYLE1BQU0sQ0FBQyx1QkFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==