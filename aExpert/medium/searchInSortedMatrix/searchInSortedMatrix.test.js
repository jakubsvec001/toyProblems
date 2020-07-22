"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testCases_1 = require("./testCases");
const searchInSortedMatrix_1 = __importDefault(require("./searchInSortedMatrix"));
describe('searchInSortedMatrix', () => {
    for (let key in testCases_1.matrixTests) {
        let test = testCases_1.matrixTests[key];
        it(`${key}`, () => {
            expect(searchInSortedMatrix_1.default(test.matrix, test.target)).toEqual(test.output);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoSW5Tb3J0ZWRNYXRyaXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaEluU29ydGVkTWF0cml4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwyQ0FBdUQ7QUFDdkQsa0ZBQTBEO0FBRTFELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsS0FBSyxJQUFJLEdBQUcsSUFBSSx1QkFBVyxFQUFFO1FBQzNCLElBQUksSUFBSSxHQUFHLHVCQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFO1lBQ2hCLE1BQU0sQ0FBQyw4QkFBb0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQyxDQUFDIn0=