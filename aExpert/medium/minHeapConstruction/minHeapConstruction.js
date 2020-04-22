/**
 * implement a minHeap
 * childOne = 2i + 1;
 * childTwo = 2i + 2;
 * parent = math.floor((i-1)/2)
 * in a min heap, parents are always smaller than children
 * in a min heap when sifting down and the parent is larger than either child, swap parent with smallest child;  
 */
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }
  // build a MinHeap with an input array
  buildHeap(array) {
    // find the last parent
    this.heap = array;
    let lastParent = this._getParent(this.heap.length - 1);
    return this.heap;
  }
  
  //use with insertion and deletion
  siftDown() {}

  //during insertion and deletion
  siftUp() {}

  // peek at the heap's minumum/ root value
  peek() {}

  //remove the minimum value
  remove() {}

  //insert integer into heap. Insert at the end, then sift up
  insert(value) {}

  _swap(i1, i2){

  }
  _getChildren(i){
    if (i > this.heap.length-1 || i < 0) return {'index': undefined, 'value': undefined};
    const left = {},
          right = {};
    left.index = (2*i) + 1;
    left.value = this.heap[left.index];
    right.index = (2*i) + 2;
    right.value = this.heap[right.index];
    return { left, right };
  }
  _getParent(i){
    if (i > this.heap.length-1 || i < 0) return {'index': undefined, 'value': undefined};
    const parent = {};
    parent.index = Math.floor((i-1)/2)
    if (parent.index > -1) {
      parent.value = this.heap[parent.index] 
      return parent
    }
    parent.value = undefined;
    return parent;
  }
}

const h1 = new MinHeap([10,9,8,7,6,5,3,2,1])
console.log(h1._getParent(0))

module.exports = { MinHeap };
