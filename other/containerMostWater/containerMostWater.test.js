const containerMostWater = require('./containerMostWater.js')

test('correct area [1,8,6,2,5,4,8,3,7]', () => {
  expect(containerMostWater([1,8,6,2,5,4,8,3,7])).toBe(49)
})

test('correct area [1,8,6,2,100,4,100,3,7]', () => {
  expect(containerMostWater([1,8,6,2,100,4,100,3,7])).toBe(200)
})

test('correct area [1,7]', () => {
  expect(containerMostWater([1,7])).toBe(200)
})