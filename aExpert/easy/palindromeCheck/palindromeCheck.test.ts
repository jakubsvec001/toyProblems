import palindromeCheck from './palindromeCheck.js'


interface ex {
  word: string,
  output: boolean,
}

const ex1:ex = {
  word: 'palindrome',
  output: false,
}

const ex2:ex = {
  word: 'abba',
  output: true,
}

const ex3:ex = {
  word: 'abcba',
  output: true,
}

const ex4:ex = {
  word: '',
  output: false,
}

describe('base cases', () => {
  it('1', () => {
    expect(palindromeCheck(ex1.word)).toBe(ex1.output);
    expect(palindromeCheck(ex2.word)).toBe(ex2.output);
    expect(palindromeCheck(ex3.word)).toBe(ex3.output);
    expect(palindromeCheck(ex4.word)).toBe(ex4.output);
  })
})