/**
 * Write a function that, given two objects, returns whether or not the two
 * are deeply equivalent--meaning the structure of the two objects is the
 * same, and so is the structure of each of their corresponding descendants.
 *
 * Examples:
 *
 * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
 * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
 *
 * don't worry about handling cyclical object structures.
 *
 */

var isSameChildren = (arr1, arr2) => {
  for (let item of arr1) {
    if (!arr2.includes(item)) {
      return false;
    }
  }
  return true;
};

var isObject = value1 => {
  return typeof value1 === "object" && !Array.isArray(value1);
};



var deepEquals = function(apple, orange) {
  let areSame = true;
  const recurse = (apple, orange) => {
    // if both objects are leaves:
    if (!isObject(apple) && !isObject(orange)) {
      // if leaves are not the same
      if (apple !== orange) {
        areSame = false;
      }
    } else if (
      (!isObject(apple) && isObject(orange)) ||
      (isObject(apple) && !isObject(orange))
    ) {
      areSame = false;
    } else if (isObject(apple) && isObject(orange)) {
      let appleKeys = Object.keys(apple);
      let orangeKeys = Object.keys(orange);
      if ((appleKeys.length === orangeKeys.length) && isSameChildren(appleKeys, orangeKeys)){
        for (let key of appleKeys){
          recurse(apple[key], orange[key])
        }
      } else {
        areSame = false;
      }
    }
  };
  recurse(apple, orange)
  return areSame;
};


const deepEqualsPure = (thing1, thing2) => {
  if ((typeof thing1 !== "object") && (typeof thing2 !== "object")){
    if (thing1 !== thing2) {
      return false;
    }
  } else if (Object.keys(thing1).length !== Object.keys(thing2).length) {
    return false;
  } else {
    Object.keys(thing1).forEach( key => {
      if ( !deepEqualsPure(thing1[key], thing2[key]) ){
        return false;
      }
    })
  }
  return true;
}

console.log(deepEqualsPure({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEqualsPure({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
console.log(
  deepEqualsPure({ foo: 1, b: { c: "potato" } }, { foo: 1, b: { c: 3 } })
); // false
console.log(
  deepEqualsPure({ foo: 1, b: { c: 3 } }, { foo: 1, b: { c: "potato" } })
); // false

// console.log('SAME ARRAYS')
// console.log(isSameChildren([1,2,3], [3,2,1])) // true
// console.log(isSameChildren([1,2,3], [3,2,4])) // false
