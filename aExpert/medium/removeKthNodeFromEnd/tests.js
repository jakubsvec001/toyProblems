"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LL = exports.tests = exports.one = void 0;
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
exports.LL = LL;
const one = new LL(1);
exports.one = one;
const two = new LL(2);
const three = new LL(3);
const four = new LL(4);
const five = new LL(5);
const six = new LL(6);
const seven = new LL(7);
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
const test1 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
test1.next.next = null;
const test2 = Object.assign(Object.create(Object.getPrototypeOf(test1)), test1);
const test3 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
const test4 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
const test5 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
const tests = {
    1: {
        input: [test1, 2],
        output: [2],
    },
    2: {
        input: [test2, 1],
        output: [1],
    },
    3: {
        input: [test3, 7],
        output: [2, 3, 4, 5, 6, 7],
    },
    4: {
        input: [test4, 3],
        output: [1, 2, 3, 4, 6, 7],
    },
};
exports.tests = tests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLEVBQUU7SUFHTixZQUFZLEdBQVc7UUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQUksT0FBTyxHQUFNLElBQUksQ0FBQztRQUN0QixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDakIsT0FBTSxPQUFPLEVBQUU7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUN4QixPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztTQUN4QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQW1Eb0IsZ0JBQUU7QUFoRHZCLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBZ0RiLGtCQUFHO0FBL0NaLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLE1BQU0sR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXhCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2YsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDakIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEIsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFFakIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1RSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzVFLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDNUUsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQVM1RSxNQUFNLEtBQUssR0FBUztJQUNsQixDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNaO0lBQ0QsQ0FBQyxFQUFFO1FBQ0QsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNqQixNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDWjtJQUNELENBQUMsRUFBRTtRQUNELEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDakIsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0I7SUFDRCxDQUFDLEVBQUU7UUFDRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNCO0NBQ0YsQ0FBQztBQUVZLHNCQUFLIn0=