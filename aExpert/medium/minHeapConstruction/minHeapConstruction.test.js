const { MinHeap } = require('./minHeapConstruction');

describe('buildHeap', () => {
  it('#1', () => {
    const h1 = new MinHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(h1.heap).toEqual([1, 2, 4, 3, 6, 5, 8, 10, 7, 9]);
  });
});

describe('siftDown', () => {
  it('#1', () => {
    const h4 = new MinHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(h4.heap).toEqual([1, 2, 4, 3, 6, 5, 8, 10, 7, 9]);
  });
});

describe('siftUp', () => {
  it('#1', () => {});
});

describe('peek', () => {
  it('#1', () => {
    const h5 = new MinHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(h5.heap).toEqual([1, 2, 4, 3, 6, 5, 8, 10, 7, 9]);
    expect(h5.peek()).toBe(1);
  });
});

describe('remove', () => {
  it('#1', () => {});
});

describe('insert', () => {
  it('#1', () => {
    const h6 = new MinHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(h6.heap).toEqual([1, 2, 4, 3, 6, 5, 8, 10, 7, 9]);
    h6.insert(-1)
    expect(h6.heap).toEqual([-1, 1, 4, 3, 2, 5, 8, 10, 7, 9, 6])
  });
});

describe('_swap()', () => {
  it('#1', () => {
    const h3 = new MinHeap([1, 2, 3, 4, 5]);
    expect(h3._swap(0, 4).heap).toEqual([5, 2, 3, 4, 1]);
    expect(h3._swap(-1, 4).heap).toEqual([5, 2, 3, 4, 1]);
    expect(h3._swap(5, 4).heap).toEqual([5, 2, 3, 4, 1]);
    expect(h3._swap(0, -1).heap).toEqual([5, 2, 3, 4, 1]);
    expect(h3._swap(0, 5).heap).toEqual([5, 2, 3, 4, 1]);
  });
});

describe('_getChildrenOfIndex(), _getParentOfIndex()', () => {
  it('#1', () => {
    const h2 = new MinHeap([1, 2, 3, 4, 5]);
    expect(h2._getChildrenOfIndex(0).left).toEqual({ index: 1, value: 2 });
    expect(h2._getChildrenOfIndex(-1)).toEqual({
      index: undefined,
      value: undefined,
    });
    expect(h2._getParentOfIndex(3)).toEqual({ index: 1, value: 2 });
    expect(h2._getParentOfIndex(4)).toEqual({ index: 1, value: 2 });
    expect(h2._getParentOfIndex(5)).toEqual({
      index: undefined,
      value: undefined,
    });
    expect(h2._getParentOfIndex(-1)).toEqual({
      index: undefined,
      value: undefined,
    });
  });
});

describe('_getMinChildOfIndex()', () => {
  it('#1', () => {
    const h2 = new MinHeap([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    expect(h2._getMinChildOfIndex(11)).toEqual({
      index: undefined,
      value: undefined,
    });
    expect(h2._getMinChildOfIndex(-1)).toEqual({
      index: undefined,
      value: undefined,
    });
    expect(h2._getMinChildOfIndex(0)).toEqual({ index: 1, value: 2 });
    expect(h2._getMinChildOfIndex(3)).toEqual({ index: 8, value: 7 });
    expect(h2._getMinChildOfIndex(4)).toEqual({ index: 9, value: 9 });
    expect(h2._getMinChildOfIndex(9)).toBeNull();
  });
});
