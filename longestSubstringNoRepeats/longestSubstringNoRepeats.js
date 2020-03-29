/**
https://leetcode.com/problems/longest-substring-without-repeating-characters/ 

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0;
  }
  // convert to array and iterate through it, starting with the 0th index until a letter is repeated, or the array stops
  let p1;
  let p2;
  let storage;
  let longest = s[0];
  let subLongest;
  // iterate across the string from root letter
  for (let i = 0; i < s.length; i++) {
    p1 = s[i];
    storage = {};
    storage[p1] = 1
    subLongest = s[i];
    // iterate from root letter to end of array, or until
    for (let j = i + 1; j < s.length; j++) {
      p2 = s[j] 
      if (!storage[p2]){
        storage[p2] = 1;
        subLongest += p2;
      } else {
        break
      }
      if (subLongest.length > longest.length) longest = subLongest;
    }
  }
  return longest.length;
};

console.log(lengthOfLongestSubstring('pwwkew'))


module.exports = lengthOfLongestSubstring;