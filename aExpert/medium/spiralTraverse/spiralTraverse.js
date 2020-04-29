
/**
 * take in an array of size n*m. The spiral starts at the top left corner of the array [0,0] and processeds in a spiral pattern all the way until every element has been visited
 * 
 *     
 * array = [[ 1, 2, 3, 4],
 *          [12,13,14, 5],
 *          [11,16,15, 6],
 *          [10, 9, 8, 7]]
 * 
 * result = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
 */

const spiralTraverse = (array) => {

}

const array = [
  [1, 2, 3, 4, 5],
  [14, 15, 16, 17, 6],
  [13, 20, 19, 18, 7],
  [12, 11, 10, 9, 8],
];
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(spiralTraverse(array))


module.exports = { spiralTraverse }
