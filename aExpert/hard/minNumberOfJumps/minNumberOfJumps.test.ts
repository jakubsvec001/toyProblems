import minNumberOfJumps, { getMaxOptions, optionTuple } from './minNumberOfJumps'

describe('minNumberOfJumps', () => {
  it('1', ()=>{
    expect(minNumberOfJumps([3,4,2,1,2,3,7,1,1,1,3])).toBe(4);
  });
  it('2', ()=>{
    expect(minNumberOfJumps([1,1,1,1,1,1,1,1,1,1,1,1])).toBe(11);
  }),
  it('4', ()=>{
    expect(minNumberOfJumps([1000,4,2,1,2,3,7,1,1,1,3])).toBe(1);
  });
  it('5', ()=>{
    expect(minNumberOfJumps([0])).toBe(0);
  });
  it('6', ()=>{
    expect(minNumberOfJumps([2, 1, 2, 3, 1])).toBe(2);
  });
  it('7', ()=>{
    expect(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3, 2, 6, 2, 1, 1, 1, 1])).toBe(5);
  });
})

describe('minNumberOfJumps', () => {
  it('1', ()=>{
    expect(getMaxOptions([4,2,1])).toEqual([4, 0]);
  });
  it('2', ()=>{
    expect(getMaxOptions([4,1,1,1,1])).toEqual([1, 4]);
  });
  it('3', ()=> {
    expect(getMaxOptions([1, 1, 1, 3, 2, 6, 2,])).toEqual([6, 5])
  })
})