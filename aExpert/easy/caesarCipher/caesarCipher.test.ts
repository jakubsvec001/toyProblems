import caescaesarCipherEncryptor from './caesarCipher.js';
import caesarCipherEncryptor from './caesarCipher.js';

interface ex {
  word: string;
  key: number;
  output: string;
}

const ex0 = {
  word: 'abcdefg',
  key: 0,
  output: 'abcdefg',
}

const ex1 = {
  word: 'abcdefg',
  key: 2,
  output: 'cdefghi',
}

const ex2 = {
  word: 'abc',
  key: 26,
  output: 'abc'
}

const ex3 = {
  word: 'abcd',
  key: 27,
  output: 'bcde',
}

const ex4 = {
  word: 'abcd',
  key: 5003,
  output: 'lmno',
}

const ex5 = {
  word: 'xyz',
  key: 2,
  output: 'zab',
}
const tests:Array<ex> = [ex0, ex1, ex2, ex3, ex4];

describe('base cases', () => {
  it('1', () => {
    tests.forEach((test) => {
      expect(caesarCipherEncryptor(test.word, test.key)).toBe(test.output);
    })
  })
})