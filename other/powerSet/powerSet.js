/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSetIterate = function(str) {
  let strCopy = [
    ...new Set(
      str
        .split("")
        .sort()
        .join("")
    )
  ].join("");
  let results = [];
  // start with each charcter in the string;
  for (let loop = 0; loop < strCopy.length; loop++) {
    // for each character, create all groupings, increasing in length from the beginning of the rest of the string past the loop count index of the string
    for (
      let groupCount = loop + 1;
      groupCount <= strCopy.length;
      groupCount++
    ) {
      grouping = strCopy.slice(loop, groupCount);
      // console.log('loop', loop, 'groupCount', groupCount)
      // console.log(grouping)
      for (let runner = groupCount + loop; runner < strCopy.length; runner++) {
        // console.log('runner', strCopy[runner])
        results.push(grouping + strCopy[runner]);
      }
    }
  }
  return results;
};

// console.log(powerSetIterate("jumpy").sort());

// function powerSetRecurse(
//   start,
//   allSubsets = [""],
//   currentSubSet = [],
//   startAt = 0
// ) {
//   for (let position = startAt; position < start.length; position += 1) {
//     currentSubSet.push(start[position]);
//     allSubsets.push([...currentSubSet].sort().join(""));
//     powerSetRecurse(start, allSubsets, currentSubSet, position + 1);
//     currentSubSet.pop();
//   }
//   return allSubsets;
// }

// console.log(powerSetRecurse("jumpy").sort())

