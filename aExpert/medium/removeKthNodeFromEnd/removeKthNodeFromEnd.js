"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = require("./tests");
const removeKthNodeFromEnd = (ll, k) => {
    let i = 0;
    let context = ll;
    while (i < k && context) {
        context = ll.next;
        i += 1;
    }
};
console.log(removeKthNodeFromEnd(tests_1.tests[1].input[0], tests_1.tests[1].input[1]).printArray());
exports.default = removeKthNodeFromEnd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlS3RoTm9kZUZyb21FbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW1vdmVLdGhOb2RlRnJvbUVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1DQUFvQztBQUdwQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsRUFBSyxFQUFFLENBQVEsRUFBRSxFQUFFO0lBRS9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxFQUFFO1FBQ3ZCLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ2xCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDUjtBQUNILENBQUMsQ0FBQTtBQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtBQUNwRixrQkFBZSxvQkFBb0IsQ0FBQyJ9