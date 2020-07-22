"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seven = exports.six = exports.five = exports.four = exports.three = exports.two = exports.one = void 0;
class LL {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    printArray() {
        let context = this;
        const result = [];
        while (context) {
            result.push(context.val);
            context = context.next;
        }
        return result;
    }
}
exports.default = LL;
const one = new LL(1);
exports.one = one;
const two = new LL(2);
exports.two = two;
const three = new LL(3);
exports.three = three;
const four = new LL(4);
exports.four = four;
const five = new LL(5);
exports.five = five;
const six = new LL(6);
exports.six = six;
const seven = new LL(7);
exports.seven = seven;
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
console.log(one.printArray());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFxQixFQUFFO0lBR3JCLFlBQVksR0FBVztRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDRCxVQUFVO1FBQ1IsSUFBSSxPQUFPLEdBQU0sSUFBSSxDQUFDO1FBQ3RCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUNqQixPQUFNLE9BQU8sRUFBRTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ3hCLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBaEJELHFCQWdCQztBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBaUJkLGtCQUFHO0FBaEJYLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBZ0JULGtCQUFHO0FBZmhCLE1BQU0sS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBZU4sc0JBQUs7QUFkdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFjRSxvQkFBSTtBQWI3QixNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQWFRLG9CQUFJO0FBWm5DLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBWWUsa0JBQUc7QUFYeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFXa0Isc0JBQUs7QUFUL0MsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDZixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNqQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNoQixHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUVqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBIn0=