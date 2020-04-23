
const balancedBrackets = (str) => {
  if (str === undefined || str.length === 0) return true;
  // initialize a stack
  const stack = [];
  const open = {'(':1,'[':2,'{':3};
  const closed = {')':1,']':2,'}':3};
  let previousType;
  let currentType;
  // iterate string array 
  for (let i = 0; i < str.length; i += 1){
    // if encounter an open bracket,
    if (open[str[i]]) {
      //add bracket if open ['(', '[', '{'] 
      stack.push(str[i])
    } else if (closed[str[i]]){
      previousType = open[stack[stack.length - 1]];
      currentType = closed[str[i]];
      if (previousType === currentType) {
        // remove if closed [')',']','}'] and matches previousType
        stack.pop()
      } else {
        // if the last item of the stack does not match the open closing bracket, return false
        return false;
      }
    }
  }
  return stack.length === 0;
};


console.log(balancedBrackets('([])(){}(())()()'))//.toBe(true);
console.log(balancedBrackets('([])(){}(()()()'))//.toBe(false);
console.log(balancedBrackets('([])(){(}())()()'))//.toBe(false);

module.exports = { balancedBrackets };