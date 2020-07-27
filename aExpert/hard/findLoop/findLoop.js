"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = findLoop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZExvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaW5kTG9vcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBTyxFQUFVLEVBQUU7SUFJbkMsTUFBTSxPQUFPLEdBQVksRUFBRSxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFBO0lBQzVCLElBQUksT0FBTyxHQUFNLElBQUksQ0FBQztJQUN0QixPQUFPLElBQUksRUFBRTtRQUNYLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUM1QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNwQixPQUFPLFFBQVEsQ0FBQztTQUNqQjtRQUNELE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDeEI7QUFDSCxDQUFDLENBQUE7QUFHRCxrQkFBZSxRQUFRLENBQUMifQ==