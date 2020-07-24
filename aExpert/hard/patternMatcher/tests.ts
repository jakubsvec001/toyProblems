interface Itests {
  [key: string]: {
    input: string[];
    output: string[];
  }
}

const tests:Itests = {
  0: {
    input: ['xxyxxy', 'gogopowerrangergogopowerranger'],
    output: ['go', 'powerranger']
  },
  1: {
    input: ['xyxy', 'ahabwhaleahabwhale'],
    output: ['ahab', 'whale'],
  },
  2: {
    input: ['xyx', 'billiondollarbillion'],
    output: ['billion', 'dollar'],
  },
  3: {
    input: ['xxy', 'hahaha'],
    output: [],
  },
  4: {
    input: ['xyy', 'adoozydoozy'],
    output: ['a', 'doozy'],
  },
  5: {
    input: ['xxx', 'stringhere'],
    output: [],
  },
  6: {
    input: ['yy', 'stringhere'],
    output: [],
  },
  7: {
    input: ['xy', 'stringhere'],
    output: [],
  },
  8: {
    input: ['xx', 'stringhere'],
    output: [],
  },
  9: {
    input: ['yy', 'stringstring'],
    output: ['string'],
  },
  10: {
    input: ['y', 'stringhere'],
    output: ['stringhere'],
  },
  11: {
    input: ['x', 'stringhere'],
    output: ['stringhere'],
  },
  12: {
    input: ['xyxy', 'acecatacecat'],
    output: ['ace', 'cat'],
  },
  13: {
    input: ['xxyy', 'catcatnipnip'],
    output: ['cat', 'nip'],
  },
  14: {
    input: ['yyxyyx', 'gogopowerrangergogopowerranger'],
    output: ['powerranger', 'go'],
  },
  15: {
    input: ['yyx', 'doozydoozya'],
    output: ['doozy', 'a'],
  },
}

export default tests;