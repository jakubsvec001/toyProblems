const { balancedBrackets } = require('./balancedBrackets');

describe('base case', ()=>{
  it('1', ()=>{
    expect(balancedBrackets('([])(){}(())()()')).toBe(true);
    expect(balancedBrackets('([])(){}(()()()')).toBe(false);
    expect(balancedBrackets('([])(){(}())()()')).toBe(false);
  });
  it('2', ()=>{
    expect(balancedBrackets('')).toBe(true);
    expect(balancedBrackets()).toBe(true);
  });
})