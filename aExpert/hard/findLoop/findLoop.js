"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findLoop = (head) => {
    let slow = head.next;
    let fast = head.next.next;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
exports.default = findLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZExvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaW5kTG9vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBTyxFQUFLLEVBQUU7SUFDOUIsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUssQ0FBQztJQUN6QixJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUssQ0FBQztJQUMvQixPQUFPLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUM7UUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUMsSUFBSyxDQUFDO0tBQ3pCO0lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNaLE9BQU8sSUFBSSxLQUFLLElBQUksRUFBRTtRQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNsQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFBO0FBR0Qsa0JBQWUsUUFBUSxDQUFDIn0=