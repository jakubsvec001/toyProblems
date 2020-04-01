/**
 * https://leetcode.com/problems/divide-two-integers/
 * 
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {
  if (divisor === 0) return undefined;
  if (dividend === 0) return 0;
  if (divisor === 1) return dividend;
  if (divisor === -1) return -dividend;
  const isNegative = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0);
  let numerator = Math.abs(dividend);
  let denominator = Math.abs(divisor);
  let count = 0;
  if (numerator < denominator) {
    return 0
  }
  if (numerator === denominator) {
    if (isNegative) return -1;
    return 1;
  }
  while (numerator > 0) {
    numerator -= denominator;
    count += 1;
  }
  if (numerator < 0) count -= 1;
  if (isNegative) return -count
  return count;
};

module.exports = divide;
