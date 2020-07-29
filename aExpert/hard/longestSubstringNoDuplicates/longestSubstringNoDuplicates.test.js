"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const longestSubstringNoDuplicates_1 = __importDefault(require("./longestSubstringNoDuplicates"));
describe('longestSubstringWithoutDuplication', () => {
    it('0', () => {
        expect(longestSubstringNoDuplicates_1.default('clementisacap')).toBe('mentisac');
    });
    it('1', () => {
        expect(longestSubstringNoDuplicates_1.default('abcdefabcdefg')).toBe('abcdefg');
    });
    it('2', () => {
        expect(longestSubstringNoDuplicates_1.default('abcdefabcde')).toBe('abcdef');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9uZ2VzdFN1YnN0cmluZ05vRHVwbGljYXRlcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9uZ2VzdFN1YnN0cmluZ05vRHVwbGljYXRlcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0dBQWdGO0FBRWhGLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7SUFDbEQsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDWCxNQUFNLENBQUMsc0NBQWtDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUNYLE1BQU0sQ0FBQyxzQ0FBa0MsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RSxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsTUFBTSxDQUFDLHNDQUFrQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==