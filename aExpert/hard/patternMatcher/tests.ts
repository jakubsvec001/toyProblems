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
    output: [],
  },
  10: {
    input: ['y', 'stringhere'],
    output: [],
  },
  11: {
    input: ['x', 'stringhere'],
    output: [],
  },
  12: {
    input: ['xyxy', 'angelinaanistonangelinaaniston'],
    output: ['angelinaan', 'iston'],
  },
  13: {
    input: ['xxyy', 'angelinaangelinanistonniston'],
    output: ['angelina', 'niston'],
  },
}

export default tests;