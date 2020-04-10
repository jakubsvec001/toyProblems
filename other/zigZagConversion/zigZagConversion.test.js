const { zigZagConversion } = require('./zigZagConversion.js');

describe('zigZagConversion tests', () => {
  test('zigZagConversion function exists', () => {
    expect(zigZagConversion).toBeInstanceOf(Function);
  });

  test('input string length = 0', () => {
    expect(zigZagConversion('')).toBe('');
  });

  test('input (PAYPALISHIRING, 1)', () => {
    expect(zigZagConversion('PAYPALISHIRING', 1)).toBe('PAYPALISHIRING');
  });

  test('input (PAYPALISHIRING, 0)', () => {
    expect(zigZagConversion('PAYPALISHIRING', 0)).toBeNull();
  });

  test('input ("PAYPALISHIRING", 4)', () => {
    expect(zigZagConversion('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
  });

  test('input ("PAYPALISHIRING", 3)', () => {
    expect(zigZagConversion('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
  });

  test('input (PAYPALISHIRING, 5)', () => {
    expect(zigZagConversion('PAYPALISHIRING', 5)).toBe('PHASIYIRPLIGAN');
  });

  test('input (PAYPALISHIRING, 6)', () => {
    expect(zigZagConversion('PAYPALISHIRING', 6)).toBe("PRAIIYHNPSGAIL");
  });
});
