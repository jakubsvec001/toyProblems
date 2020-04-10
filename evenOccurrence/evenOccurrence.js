/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

const findIndex = function(val, arr){
  let res = -1;
  arr.forEach((obj, i) => {
    if (obj.value === val){
      console.log(i)
      res = i;
    }
  })
  return res;
}

const evenOccurrence = function(arr) {
  // Your code here.
  let seen = []
  let pos = 1;
  let val;
  for (let i = 0; i < arr.length; i++) {
    val = arr[i];   
    foundIdx = findIndex(val, seen);
    if (foundIdx === -1){
      seen.push = {value: val, count: 1, position: pos}
      pos += 1;
    } else {
      seen.forEach(item => {
        if (item.value === val){
          item.count += 1
        }
      })
    }
  }
  console.log(seen)
};

console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]))
