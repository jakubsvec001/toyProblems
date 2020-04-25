const { levenshteinDistance } = require('./levenshteinDistance');

describe('levenshteinDistance()', ()=>{
  it('1', ()=> {
    expect(levenshteinDistance('yabz','abc')).toBe(2)
  })
})