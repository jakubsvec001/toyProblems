const { MinHeap } = require('./minHeapConstruction');

describe('buildHeap', ()=>{
  it('#1', () => {
    const h1 = new MinHeap([10,9,8,7,6,5,3,2,1])
    expect(h1.heap).toEqual([1,2,4,3,6,5,8,10,7,9])
  })
})

describe('siftDown', ()=>{
  it('#1', () => {

  })
})

describe('siftUp', ()=>{
  it('#1', () => {

  })
})

describe('peek', ()=>{
  it('#1', () => {

  })
})

describe('remove', ()=>{
  it('#1', () => {

  })
})

describe('insert', ()=>{
  it('#1', () => {

  })
})

describe('_getChildren(), _getParent()', () => {
  it('#1', () => {
    const h2 = new MinHeap([1,2,3,4,5]);
    expect(h2._getChildren(0).left).toEqual({"index": 1, "value": 2});
    expect(h2._getChildren(-1)).toEqual({"index": undefined, "value": undefined})
    expect(h2._getParent(3)).toEqual({"index": 1, "value": 2})
    expect(h2._getParent(4)).toEqual({"index": 1, "value": 2})
    expect(h2._getParent(5)).toEqual({"index": undefined, "value": undefined})
    expect(h2._getParent(-1)).toEqual({"index": undefined, "value": undefined})
  })
});