/**
 * 
 */
const twoNumberSum = (array, targetSum) => {
  const dir = {};
  let difference;
  array.forEach((item) => {
    dir[item] = item;
  })
 
  return []
}


console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

module.exports = { twoNumberSum }