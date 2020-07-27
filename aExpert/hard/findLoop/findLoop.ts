import { loopTest } from './tests'

export class LL {
  value: number|string;
  next: LL|null;
  constructor(value:number|string){
    this.value = value
    this.next = null;
  }

  printArray() {
    const result = [];
    let context:LL|null = this;
    while (context) {
      result.push(context.value);
      context = context.next;
    }
    return result;
  }
}

const findLoop = (head:LL):LL|null => {
  interface iParents {
    [key: string]: number|string;
  }
  const parents:iParents = {};
  parents[head.value] = 'root'
  let context:LL = head;
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
}

console.log(findLoop(loopTest[0]))

export default findLoop;