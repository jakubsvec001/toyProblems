class LL {
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

const test1 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
test1.next.next = null;
const test2 = Object.assign(Object.create(Object.getPrototypeOf(test1)), test1);
const test3 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
const test4 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);
const test5 = Object.assign(Object.create(Object.getPrototypeOf(one)), one);

interface Itest {
  [key: number]: {
    input: [LL, number],
    output: number[],
  }
}

const tests:Itest = {
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

export { one, tests, LL };
