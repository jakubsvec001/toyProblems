/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
const validate = (item, set, seen) => {
  let result = true;
  if (!seen[item]) {
    // if not seen, check if exits in set. 
    // If not exists, return false. If exists, do nothing
    if (!set[item]) {
      result = false
    }
    // place item into seen object for future reference
    seen.item = item;
  }
  return result
};

Array.prototype.isSubsetOf = function (arr) {
  // your code here
  const set = {};
  arr.forEach((item) => {
    if (typeof item === 'object') {
      set[JSON.stringify(item)] = item;
    } else {
      set[item] = item;
    }
  })
  const seen = {};
  let stringObj;
  let result;
  // iterate through this's content
  for (let item of this) {
    // if content item is array or object:
    if (typeof item === 'object') {
      stringObj = JSON.stringify(item);
      // check if already seen, if seen already do nothing
      result = validate(stringObj, set, seen)
      if (!result) {
        return false;
      }
    } else {
      // check if already seen, if seen already do nothing
      result = validate(item, set, seen)
      if (!result) {
        return false;
      }
    }
  }
  return true;
};

var a = ['commit','push', 'push']
console.log(a.isSubsetOf(['commit','rebase','push','blame'])) // true
console.log(a.isSubsetOf(['commit','rebase','blame'])) // false
console.log(a.isSubsetOf(['commit','rebase','blame'])) // false
var b = ['merge','reset','reset']
console.log(b.isSubsetOf(['merge','add','commit'])) // false
console.log(b.isSubsetOf(['reset','add','commit'])) // false

var obj1 = {item1: 1, item2: 2}
var obj2 = {item3: 3, item4: 4}
var c = ['commit','push', obj1]
console.log(c.isSubsetOf(['commit', 'shleem', 'push', obj1])) // true
console.log(c.isSubsetOf(['commit', 'shleem', 'push', obj2])) // false