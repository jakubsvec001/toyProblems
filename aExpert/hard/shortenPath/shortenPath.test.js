"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shortenPath_1 = __importDefault(require("./shortenPath"));
const tests_1 = __importDefault(require("./tests"));
describe('shortenPath', () => {
    for (const key in tests_1.default) {
        const test = tests_1.default[key];
        it(`${key}`, () => {
            expect(shortenPath_1.default(test.input)).toBe(test.output);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnRlblBhdGgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNob3J0ZW5QYXRoLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnRUFBd0M7QUFDeEMsb0RBQTRCO0FBSTVCLFFBQVEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFO0lBQzNCLEtBQUssTUFBTSxHQUFHLElBQUksZUFBSyxFQUFFO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLGVBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDaEIsTUFBTSxDQUFDLHFCQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuRCxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDLENBQUEifQ==