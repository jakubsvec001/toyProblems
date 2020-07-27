const topologicalSort = (jobs:number[], deps:number[][]):number[] => {
  const result:number[] = [];
  // create adjacency list;
  interface iAdjacencyList {
    [key: number]: number[];
  }
  const adjacencyList:iAdjacencyList = {};
  // initialize keys of each job with empty array of dependencies
  for (const job of jobs) {
    adjacencyList[job] = [];
  }
  // add dependencies to adjacencyList for each job
  for (const tup of deps) {
    if (!adjacencyList[tup[1]]) {
      return [];
    }
    adjacencyList[tup[1]].push(tup[0])
  }




  // bredth-first search (and destroy)
  while (true) {
    // add all jobs with no deps to a temp array 'canComplete'
    const canComplete = [];
    for (const key in adjacencyList) {
      const list = adjacencyList[key];
      if (!list.length) {
        canComplete.push(+key)
      }
    }
    // if we cannot complete any more jobs and job.length > 0:
    if (!canComplete.length) {
      return [];
    }
    // add jobs that can be completed to result
    result.push(...canComplete)
    // delete jobs that can be completed from the adjacencyList object:
    for (let completed of canComplete) {
      delete adjacencyList[completed];
    }
    // success case (nothing in adjacency list)
    if (!Object.keys(adjacencyList).length){
      return result;
    }
    // delete completed jobs from all other job's dependency lists
    for (let key in adjacencyList) {
      let list = adjacencyList[key];
      for (let completed of canComplete) {
        list = list.filter((item)=> {
          if (item !== completed) return true;
        })
      }
      adjacencyList[key] = list;
    }
    // // delete keys with empty adjacency lists
    // for (const key in adjacencyList) {
    //   if (!adjacencyList[key].length) {
    //     delete adjacencyList[key];
    //   }
    // }
  }




  // if we still have jobs to complete, return empty array
  if (jobs.length) {
    return [];
  }
  // success! return the partially ordered list:
  return result;
}

console.log( 
  topologicalSort(
    [1, 2, 3, 4, 5],
    [
      [5, 1],
      [5, 3],
      [5, 2],
      [5, 4],
      [3, 4],
      [4, 1],
      [3, 2],
      [2, 1],
    ],
  ),
)

export default topologicalSort;