"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nthFibonacci_1 = require("./nthFibonacci");
jest.setTimeout(5000);
describe('base case', () => {
    it('1', () => {
        expect(nthFibonacci_1.memoizedGetNthFib(0)).toBe(0);
        expect(nthFibonacci_1.memoizedGetNthFib(1)).toBe(0);
        expect(nthFibonacci_1.memoizedGetNthFib(2)).toBe(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnRoRmlib25hY2NpLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudGhGaWJvbmFjY2kudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlEQUFpRDtBQUVqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsTUFBTSxDQUFDLGdDQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxnQ0FBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsZ0NBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFRTCxDQUFDLENBQUMsQ0FBQyJ9