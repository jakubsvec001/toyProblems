export const deepSort = (array:number[][]) => {
  // first sort by length;
  interface l {
    [key: string]: number[][];
  }
  const byLength = {}
  array.forEach((item, i) => {
    if (!byLength[item.length]) {
      byLength[item.length] = [item];
    } else {
      byLength[item.length].push(item);
    }
  })
  // sort within each length
  const result = [];
  for (const key in byLength) {
    const values = byLength[key];
    values.sort((a, b) => {
      for (let i = 0; i < a.length; i += 1){
        if (a[i] !== b[i]) {
          return a[i] > b[i];
        }
      }
    })
    result.push(...values)
  }
  return result;
}


export const tests = {
  1: {
    input: [1,2,3],
    output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]],
  },
  2: {
    
  }
}
console.log(deepSort([[2,3],[],[2],[1,2,3],[1,2],[1,3],[3],[1]));
// console.log(tests[1].output)