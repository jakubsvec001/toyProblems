export default class LL {
  public val: number;
  public next: LL|null;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
  printArray() {
    let context:LL = this;
    const result = []
    while(context) {
      result.push(context.val)
      context = context.next;
    }
    return result;
  }
}

const one = new LL(1);
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

console.log(one.printArray())

export {one, two, three, four, five, six, seven};