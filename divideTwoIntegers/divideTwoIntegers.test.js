const divide = require('./divideTwoIntegers');

describe('inputs both positive or negative', ()=>{
  describe('dividend is larger than divisor', () => {
    test('correctly divides: 10, 3', () => {
      expect(divide(10, 3)).toBe(3)
    })
  
    test('correctly divides: -10, -3', () => {
      expect(divide(-10, -3)).toBe(3)
    })

    test('correctly divides: -10, -10', () => {
      expect(divide(-10, -10)).toBe(1)
    })

    test('correctly divides: 10, 10', () => {
      expect(divide( 10, 10)).toBe(1)
    })
    
    test('the absolute values of the divisor and dividend are equal and both are equally-signed', () => {
      expect(divide(1, 1)).toBe(1)
    })

    test('the absolute values of the divisor and dividend are equal and both are equally-signed', () => {
      expect(divide(-1, -1)).toBe(1)
    })

    test('the absolute values of the divisor and dividend are equal and both are equally-signed', () => {
      expect(divide(-2147483648, -1)).toBe(2147483648)
    })
  
  })
  
  describe('dividend is smaller than divisor, equally-signed', () => {
    test('returns 0 if dividend is smaller than divisor', () => {
      expect(divide(3, 6)).toBe(0)
    })

    test('returns 0 if dividend is smaller than divisor', () => {
      expect(divide(-7, -3)).toBe(2)
    })
  })
})

describe('one of two inputs is negative', () => {
  describe('dividend is larger than divisor', () => {
    test('returns -1 if dividend and divisor are equal and are not equally-signed', () => {
      expect(divide(-1, 1)).toBe(-1)
    })
    
    test('returns -1 if dividend and divisor are equal and are not equally-signed', () => {
      expect(divide(1, -1)).toBe(-1)
    })
  })

  describe('dividend is smaller than divisor', () => {
    test('input -7, 3', () => {
      expect(divide(-7, 3)).toBe(-2)
    })

    test('input 7, -3', () => {
      expect(divide(7, -3)).toBe(-2)
    })

    test('input 3, -7', () => {
      expect(divide(3, -7)).toBe(0)
    })

    test('input -3, 7', () => {
      expect(divide(-3, 7)).toBe(0)
    })
  })
})

describe('edge cases of zero', () => {
  test('returns undefined for division by zero', () => {
    expect(divide(9999, 0)).toBeUndefined()
  })

  test('returns zero when dividend is zero', () => {
    expect(divide(0, 9999)).toBe(0);
  })

  test('returns dividend if divisor is 1', () => {
    expect(divide(-2147483648, 1)).toBe(-2147483648)
  })
})



