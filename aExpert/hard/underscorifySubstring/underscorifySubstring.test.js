"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const underscorifySubstring_1 = __importDefault(require("./underscorifySubstring"));
describe('underscorifySubstring', () => {
    it('0', () => {
        const test = 'testthis is a testtest to see if testestest it works';
        expect(underscorifySubstring_1.default(test, 'test')).toBe('_test_this is a _testtest_ to see if _testestest_ it works');
    });
    it('1', () => {
        const test = 'thisonion is a oniononion to see on if onionionion it onionon works onion';
        expect(underscorifySubstring_1.default(test, 'onion')).toBe('this_onion_ is a _oniononion_ to see on if _onionionion_ it _onion_on works _onion_');
    });
    it('2', () => {
        const test = 'testthis is a testtest to see if testestest it works';
        expect(underscorifySubstring_1.default(test, 'dfsdfdefd')).toBe('testthis is a testtest to see if testestest it works');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJzY29yaWZ5U3Vic3RyaW5nLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1bmRlcnNjb3JpZnlTdWJzdHJpbmcudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9GQUE0RDtBQUU1RCxRQUFRLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO1FBQ1gsTUFBTSxJQUFJLEdBQUcsc0RBQXNELENBQUE7UUFDbkUsTUFBTSxDQUFDLCtCQUFxQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO0lBQ2pILENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDWCxNQUFNLElBQUksR0FBRywyRUFBMkUsQ0FBQTtRQUN4RixNQUFNLENBQUMsK0JBQXFCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFGQUFxRixDQUFDLENBQUM7SUFDM0ksQ0FBQyxDQUFDLENBQUM7SUFDSCxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtRQUNYLE1BQU0sSUFBSSxHQUFHLHNEQUFzRCxDQUFBO1FBQ25FLE1BQU0sQ0FBQywrQkFBcUIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsc0RBQXNELENBQUMsQ0FBQztJQUNoSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFBIn0=