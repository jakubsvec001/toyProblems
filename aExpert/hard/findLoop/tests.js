"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noLoopTest = exports.loopTest = void 0;
const LinkedListClass_1 = __importDefault(require("./LinkedListClass"));
const makeLL = (count) => {
    const test = {};
    const root = new LinkedListClass_1.default(0);
    test[0] = root;
    for (let i = 1; i < count; i += 1) {
        test[i] = new LinkedListClass_1.default(i);
        test[i - 1].next = test[i];
    }
    return test;
};
const loopTest = makeLL(10);
exports.loopTest = loopTest;
loopTest[9].next = loopTest[4];
const noLoopTest = makeLL(10);
exports.noLoopTest = noLoopTest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3RUFBbUM7QUFNbkMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFZLEVBQVMsRUFBRTtJQUNyQyxNQUFNLElBQUksR0FBVSxFQUFFLENBQUM7SUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSx5QkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUkseUJBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDMUI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUtuQiw0QkFBUTtBQUpqQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUvQixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFWCxnQ0FBVSJ9