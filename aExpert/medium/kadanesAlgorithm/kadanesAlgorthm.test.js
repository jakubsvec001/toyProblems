"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = require("./tests");
const kadanesAlgorthm_1 = __importDefault(require("./kadanesAlgorthm"));
describe('', () => {
    let testItem;
    for (let test in tests_1.tests) {
        it('test', () => {
            expect(kadanesAlgorthm_1.default(tests_1.tests[test].input)).toEqual(tests_1.tests[test].output);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2FkYW5lc0FsZ29ydGhtLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJrYWRhbmVzQWxnb3J0aG0udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUErQztBQUMvQyx3RUFBaUQ7QUFFakQsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7SUFDaEIsSUFBSSxRQUFRLENBQUM7SUFDYixLQUFLLElBQUksSUFBSSxJQUFJLGFBQUssRUFBRTtRQUN0QixFQUFFLENBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNmLE1BQU0sQ0FBQyx5QkFBZ0IsQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxDQUFBO0tBQ0g7QUFDSCxDQUFDLENBQUMsQ0FBQSJ9