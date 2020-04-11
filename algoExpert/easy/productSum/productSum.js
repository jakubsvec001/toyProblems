

/**
 * Write a function that takes in a "special" array and returns its product sum. A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then multiplied by their level of depth.
 * 
 * For example, the product sum of [x, y] is x + y; the product sum of [x, [x, y]] is x + 2y + 2z.
 * 
 * Sample input: 
 * array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
 * Sample output:
 * 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)
 * @param {Array} array 
 * @returns {Number}
 */
function productSum(array, depth) {
  if (arguments.length === 1) depth = 0;
  let sum = 0;
  for (let item of array) {
    if (typeof item === 'number') {
      sum += item;
    } else if (typeof item === 'object' && Array.isArray(item)) {
      sum += productSum(item, depth + 1)
    }
  }
  return (depth + 1) * sum
}



const test = [[1, 2], 3, [4, 5]];

console.log(productSum(test));

module.exports = { productSum };