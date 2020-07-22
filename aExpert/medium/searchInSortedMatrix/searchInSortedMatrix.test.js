"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testCases_1 = __importDefault(require("./testCases"));
const searchInSortedMatrix_1 = __importDefault(require("./searchInSortedMatrix"));
describe('searchInSortedMatrix', () => {
    for (let key in testCases_1.default) {
        let test = testCases_1.default[key];
        it(`${key}`, () => {
            expect(searchInSortedMatrix_1.default(test.matrix, test.target)).toBe(test.output);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoSW5Tb3J0ZWRNYXRyaXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaEluU29ydGVkTWF0cml4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBZ0M7QUFDaEMsa0ZBQTBEO0FBRTFELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxtQkFBSyxFQUFFO1FBQ3JCLElBQUksSUFBSSxHQUFHLG1CQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyw4QkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUUsQ0FBQyxDQUFDLENBQUE7S0FDSDtBQUNILENBQUMsQ0FBQyxDQUFBIn0=