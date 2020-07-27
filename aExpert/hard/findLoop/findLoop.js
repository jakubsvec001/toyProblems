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
        slow.next;
        fast.next;
    }
    return slow;
};
exports.default = findLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZExvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaW5kTG9vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBTyxFQUFLLEVBQUU7SUFDOUIsSUFBSSxJQUFJLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQztJQUN4QixJQUFJLElBQUksR0FBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixPQUFPLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ3ZCO0lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNaLE9BQU8sSUFBSSxLQUFLLElBQUksRUFBRTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNYO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUE7QUFHRCxrQkFBZSxRQUFRLENBQUMifQ==