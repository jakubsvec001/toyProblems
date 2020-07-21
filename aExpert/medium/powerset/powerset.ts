// given an array X of unique integers, a powerset function returns the set of all subsets of X.

const powerset = (array:number[]):number[][] => {
  const subsets = [[]];
  let ele;
  
  for (let i = 0; i < array.length; i += 1) {
    ele = array[i];
    const length = subsets.length;
    for (let j = 0; j < length; j += 1) {
      const currentSubset = subsets[j];
      subsets.push(currentSubset.concat(ele))
    }
  }
  return subsets;
}


console.log(powerset([1,2,3,4]))

export default powerset;