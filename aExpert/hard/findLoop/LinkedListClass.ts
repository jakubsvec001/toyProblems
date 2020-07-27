export default class LL {
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