// Calculate the nth fibonnaci number. The sequence begins with 0. The second integer is 1.
// For this question, the  nth fibonacci number of (1) is 0. The nth fibonacci of  (2) is 1...

function getNthFib(n: number): number {
  if (n<=1){
    return 0;
  } else if (n===2) {
    return 1;
  }
  return getNthFib(n-2) + getNthFib(n-1)
}

let memoizedGetNthFib: (n: number) => number;

memoizedGetNthFib = function (n){
  interface memo {
    [id: string]: number;
  }
  const memo: memo = {};
  const memoize = (n: number): number => {
    if (!memo[n]) {
      memo[n] = memoizedGetNthFib(n)
    }
    return memo[n];
  }
  const recurse = (n: number): number => {
    if (n <= 1) {
      return 0;
    } else if (n === 2 ) {
      return 1;
    }
    const a: number = memoize(n-1);
    const b: number = memoize(n-2);
    return a + b ;
  }

  return recurse(n);
}

export { memoizedGetNthFib };