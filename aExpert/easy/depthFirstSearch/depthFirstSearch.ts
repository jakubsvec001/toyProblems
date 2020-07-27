class Node {
  name: string;
  children: Node[]
  constructor(name:string){
    this.name = name;
    this.children = [];
  }
  addChild(name:string) {
    this.children.push(new Node(name));
    return this;
  }


  
  depthFirstSearch(array:string[]) {
    array.push(this.name);
    this.children.forEach((child) => {
      child.depthFirstSearch(array)
    })
    return array;
  }
}


let node0:Node = new Node('0');
let node1:Node = node0.addChild('1.0');
node0.addChild('1.1');
node0.addChild('1.2');
let node20:Node = node1.children[0].addChild('2.0');
let node21:Node = node1.children[0].addChild('2.1');
let node22:Node = node1.children[1].addChild('2.2');
let node30:Node = node21.addChild('3.1');

console.log(node0.depthFirstSearch([]));


export default Node;