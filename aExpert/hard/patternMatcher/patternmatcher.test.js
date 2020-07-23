"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patternMatcher_1 = __importStar(require("./patternMatcher"));
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
describe('processForPattern', () => {
    it('1', () => {
        expect(patternMatcher_1.processForPattern('gogopowerrangergogopowerranger', 4)).toEqual('go');
        expect(patternMatcher_1.processForPattern('powerrangerpowerranger', 2)).toEqual('powerranger');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybm1hdGNoZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdHRlcm5tYXRjaGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQXFFO0FBQ3JFLG9EQUE0QjtBQUU1QixRQUFRLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFO0lBQzlCLEtBQUssTUFBTSxHQUFHLElBQUksZUFBSyxFQUFDO1FBQ3RCLE1BQU0sSUFBSSxHQUFHLGVBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyx3QkFBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUE7S0FDSDtBQUNILENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUNqQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUNYLE1BQU0sQ0FBQyxrQ0FBaUIsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM1RSxNQUFNLENBQUMsa0NBQWlCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDL0UsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9