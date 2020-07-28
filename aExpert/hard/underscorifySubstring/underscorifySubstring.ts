const underscorifySubstring = (string: string, substring: string) => {
  const matrix = Array(string.length).fill([]);
  matrix.forEach((row, i) => {
    matrix[i] = Array(substring.length).fill(0);
  });
  string.split('').forEach((letter_i, idx_i) => {
    substring.split('').forEach((letter_j, idx_j) => {
      if (letter_i === letter_j) {
        matrix[idx_i][idx_j] = 1;
      }
    });
  });
  const runs = [];
  for (let i = 0; i < string.length; i += 1) {
    if (matrix[i][0] === 1) {
      let runCount = 1;
      for (let j = 1; j < substring.length; j += 1) {
        if (!matrix[i+j]) break
        if (matrix[i + j][j] === 1) {
          runCount += 1;
        }
      }
      if (runCount === substring.length) {
        runs.push([i, i + substring.length]);
      }
    }
  }
  if (runs.length === 0) return string;
  let combined = [];
  combined.push(runs[0]);
  for (let i = 1; i < runs.length; i += 1) {
    const lastCombinedIndex = combined.length - 1;
    const [firstStart, firstEnd] = combined[lastCombinedIndex];
    const [secondStart, secondEnd] = runs[i];
    if (firstEnd >= secondStart) {
      combined[lastCombinedIndex][1] = secondEnd;
    } else {
      combined.push(runs[i])
    }
  }
  const result = string.split('');
  let compensation = 0;
  combined.forEach((tuple, i) => {
    const [first, second] = tuple;
    result.splice(first + compensation, 0, '_');
    compensation += 1;
    result.splice(second + compensation, 0, '_');
    compensation += 1;
  })
  return result.join('');
};


export default underscorifySubstring;
