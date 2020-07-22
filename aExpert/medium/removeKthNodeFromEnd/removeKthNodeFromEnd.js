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
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = __importStar(require("./tests"));
const copy1 = Object.assign({}, tests_1.one);
copy1.next.next.next = null;
const copy2 = Object.assign({}, tests_1.one);
copy2.next.next.
;
const removeKthNodeFromEnd = (ll, k) => {
    let i = ll;
    let j = ll.next;
};
console.log(removeKthNodeFromEnd(tests_1.default, 0));
exports.default = removeKthNodeFromEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlS3RoTm9kZUZyb21FbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW1vdmVLdGhOb2RlRnJvbUVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpREFBa0M7QUFFbEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBRyxDQUFDLENBQUM7QUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUM1QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxXQUFHLENBQUMsQ0FBQztBQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7SUFFZixBQUZnQixKQUFBLENBQUE7QUFFaEIsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNyQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDWCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQ2xCLENBQUMsQ0FBQTtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsZUFBRSxFQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ04sa0JBQWUsb0JBQW9CLENBQUMifQ==