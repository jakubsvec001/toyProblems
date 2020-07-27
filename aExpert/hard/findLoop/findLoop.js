"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LL = void 0;
const tests_1 = require("./tests");
class LL {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    printArray() {
        const result = [];
        let context = this;
        while (context) {
            result.push(context.value);
            context = context.next;
        }
        return result;
    }
}
exports.LL = LL;
const findLoop = (head) => {
    const parents = {};
    parents[head.value] = 'root';
    let context = head;
    while (true) {
        if (context.next === null) {
            return null;
        }
        if (parents[context.next.value]) {
            let loopHead = context.next;
            context.next = null;
            return loopHead;
        }
        parents[context.next.value] = context.value;
        context = context.next;
    }
};
console.log(findLoop(tests_1.loopTest[0]));
exports.default = findLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZExvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaW5kTG9vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFFbEMsTUFBYSxFQUFFO0lBR2IsWUFBWSxLQUFtQjtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVTtRQUNSLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLE9BQU8sR0FBVyxJQUFJLENBQUM7UUFDM0IsT0FBTyxPQUFPLEVBQUU7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQWpCRCxnQkFpQkM7QUFFRCxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQU8sRUFBVSxFQUFFO0lBSW5DLE1BQU0sT0FBTyxHQUFZLEVBQUUsQ0FBQztJQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQTtJQUM1QixJQUFJLE9BQU8sR0FBTSxJQUFJLENBQUM7SUFDdEIsT0FBTyxJQUFJLEVBQUU7UUFDWCxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDNUIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzVDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0tBQ3hCO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFbEMsa0JBQWUsUUFBUSxDQUFDIn0=