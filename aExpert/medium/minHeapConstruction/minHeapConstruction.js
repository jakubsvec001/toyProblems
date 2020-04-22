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
    let lastParent = this._getParentOfIndex(this.heap.length - 1);
    let left;
    let right;
    let minChild;
    while (lastParent.value) {
      // get children objects
      minChild = this._getMinChildOfIndex(lastParent.index);
      // if (left.value < right.value)
      lastParent = this._getParentOfIndex(lastParent.index);
    }
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

  _swap(i1, i2) {
    const heapLength = this.heap.length;
    if (i1 < 0 || i1 > heapLength - 1 || i2 < 0 || i2 > heapLength - 1)
      return this;
    [this.heap[i2], this.heap[i1]] = [this.heap[i1], this.heap[i2]];
    return this;
  }

  _getChildrenOfIndex(i) {
    if (i > this.heap.length - 1 || i < 0)
      return { index: undefined, value: undefined };
    const left = {},
          right = {};
    left.index = 2 * i + 1;
    left.value = this.heap[left.index];
    right.index = 2 * i + 2;
    right.value = this.heap[right.index];
    return { left, right };
  }
  _getParentOfIndex(i) {
    if (i > this.heap.length - 1 || i < 0)
      return { index: undefined, value: undefined };
    const parent = {};
    parent.index = Math.floor((i - 1) / 2);
    if (parent.index > -1) {
      parent.value = this.heap[parent.index];
      return parent;
    }
    parent.value = undefined;
    return parent;
  }

  _getMinChildOfIndex(parentIndex) {
    const { left, right } = this._getChildrenOfIndex(parentIndex);
    let minChild;
    // if both children present
    if (left.value && right.value) {
      minChild = [left, right].reduce(
        (agg, next) => {
          if (agg.value < next.value) return agg;
          else return next;
        },
        { value: Infinity },
      );
      return minChild;
    } else if (left.value) {
      return left;
    }
    return null;
  }
}

const h1 = new MinHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

console.log(h1._getMinChildOfIndex(4));

module.exports = { MinHeap };
