// write a function that permutes an input array. The input array contains unique integers and returns an array of arrays. The order is unimportant.

const test1 = 
[
  // 1
    //2
  [1, 2, 3, 4],
  [1, 2, 4, 3],
    //3
  [1, 3, 2, 4],
  [1, 3, 4, 2],
    //4
  [1, 4, 2, 3],
  [1, 4, 3, 2],
  // 2
    // 1
  [2, 1, 3, 4],
  [2, 1, 4, 3],
    // 3
  [2, 3, 1, 4],
  [2, 3, 4, 1],
    // 4
  [2, 4, 1, 3],
  [2, 4, 3, 1],
  // 3
    // 1
  [3, 1, 2, 4],
  [3, 1, 4, 2],
    // 2
  [3, 2, 1, 4],
  [3, 2, 4, 1],
    // 4
  [3, 4, 1, 2],
  [3, 4, 2, 1],
    // 4
    // 1
  [4, 1, 2, 3],
  [4, 1, 3, 2],
    // 2
  [4, 2, 1, 3],
  [4, 2, 3, 1],
    // 3
  [4, 3, 1, 2],
  [4, 3, 2, 1],
]

const getPermutations = (array:number[],) => {
  // base case
  if (array.length === 1) {
    return [array];
  }
  // recursive case
  let result:number[][] = [];
  let outputs = [];
  let current:number;
  // iterate across the rest of the array to find current item to pull for permutation
  for (let i = 0; i < array.length; i += 1) {
    current = array[i];
    const rest = [];
    // use all others as the 'rest' to feed back into the algorithm
    for (let j = 0; j < array.length; j += 1) {
      if (j !== i) {
        rest.push(array[j]);
      }
    }
    // feed the rest into the algorithm and get an array of results back (ie [[2,3], [3,2])
    const output = getPermutations(rest);
    // add the current item used for permutations to the front of each of the output items
    output.forEach((item) => {
      result.push([current].concat(item))
    })
  }
  // return an array of permuted items
  return result;
}

console.log(getPermutations([1]))
export default getPermutations;