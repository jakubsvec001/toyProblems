
/**
 * You're give an array of integers and an integer. Write a function that moves all instances of that ingeter in the array to the endo fo the array and returns the array.
 * The function should perform this in place (i.e. it should not mutate the input array) and doesn't need to maintain the order of integers.
 * @param {Array of Integers} array 
 * @param {Integer} toMove 
 * @returns {Array}
 */
const moveElementToEnd = (array, toMove) => {
  let movedCount = 0;
  for ( let i = 0; i <= array.length - 1; i += 1 ) {
    if (array[i] === toMove) {
      array.push(array.splice(i, 1)[0]);
      i -= 1;
      movedCount += 1;
      if ( i === array.length - movedCount ) {
        return array
      }
    }
  }
  return array;
}

const array = [5, 1, 2, 5, 5, 3, 4, 6, 7, 5, 8, 9, 10, 11, 5, 5, 12];
const toMove = 5;
console.log(moveElementToEnd(array, toMove))



module.exports = { moveElementToEnd };

17 - 6