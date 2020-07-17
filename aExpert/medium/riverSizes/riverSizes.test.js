"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const riverSizes_1 = __importDefault(require("./riverSizes"));
const tests_1 = require("./tests");
describe('tests', () => {
    for (let test in tests_1.tests) {
        it(`${tests_1.tests[test]}`, () => {
            expect(riverSizes_1.default(tests_1.tests[test].input).sort((a, b) => a - b)).toEqual(tests_1.tests[test].output);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicml2ZXJTaXplcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicml2ZXJTaXplcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOERBQXNDO0FBQ3RDLG1DQUErQztBQUkvQyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNyQixLQUFLLElBQUksSUFBSSxJQUFJLGFBQUssRUFBRTtRQUN0QixFQUFFLENBQUMsR0FBRyxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDeEIsTUFBTSxDQUFDLG9CQUFVLENBQUMsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkYsQ0FBQyxDQUFDLENBQUE7S0FDSDtBQUNILENBQUMsQ0FBQyxDQUFBIn0=