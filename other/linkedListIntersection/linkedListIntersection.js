/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}


function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  let result = [];
  let context1 = list1;
  let context2 = list2;
  while(context1.value){
    while(context2.value){
      if (context1.value === context2.value) {
        if (result.length !== 0) {
          var newNode = result[result.length-1].next = Node(context1.value) 
          result.push(newNode)
        } else {
          result.push(Node(context1.value))
        }
      }
      if (context2.next) {
        context2 = context2.next;
      } else {
        context2 = list2
        break
      }
    }
    if (context1.next) {
      context1 = context1.next;
    } else {
      break
    }
  }
  if (result.length !== 0) return result[0];
  else return null;
}

function LinkedList() {
  this.head = null;
}


// TEST 1
var list1 = Node('A');
var nodeB = list1.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
var nodeF = nodeE.next = Node('F');

var list2 = Node('X');
var nodeY = list2.next = Node('Y');
var nodeZ = nodeY.next = Node('Z');
nodeZ.next = nodeD;
console.log(JSON.stringify(linkedListIntersection(list1, list2)))
//DEF

// TEST 2
var list1 = Node('A');
var nodeB = list1.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
var nodeF = nodeE.next = Node('F');

var list2 = Node('X');
var nodeY = list2.next = Node('Y');
nodeY.next = nodeD;
console.log(JSON.stringify(linkedListIntersection(list1, list2)))
// DEF


// TEST 3
var list1 = Node('N');
var list2 = Node('O');
console.log(JSON.stringify(linkedListIntersection(list1, list2)))

// Null