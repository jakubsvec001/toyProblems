
// A palindrome is a word or phrase that is written the same way forwards and backwards.
// The function below checks a non-empty string and returns a boolean representing whether the string is a palindrome.


const palindromeCheck = (str: string):boolean => {
  let result = true;
  if (str.length === 0) return false;
  let p1:number = 0;
  let p2:number = str.length-1;
  while (p1 < p2) {
    if (str[p1] !== str[p2]) return false;
    p1 += 1;
    p2 -= 1;
  }
  return result;
}

export default palindromeCheck;