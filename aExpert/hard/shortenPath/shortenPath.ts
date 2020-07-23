import tests from './tests';


const shortenPath = (path) => {
  const longPath = path.split('/');
  const stack = [];
  let upDir = 0;
  for (let dir of longPath) {
    if (dir === '.' || dir === '') {
      continue;
    } else if (dir === '..') {
      if (!stack.length) {
        upDir += 1;
      } else {
        stack.pop();
      }
    } else {
      stack.push(dir);
    }
  }
  const res = stack.join('/');
  if (path[0] === '/') {
    return '/' + res
  } else {
    for (let i = 0; i < upDir; i += 1) {
      stack.unshift('..')
    }
    return stack.join('/');
  }
}


export default shortenPath;