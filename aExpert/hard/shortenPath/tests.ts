interface Itest {
  [key: string]: {
    input: string;
    output: string;
  }
}

const tests:Itest = {
  0: {
    input: '/foo/../test/../test/../foo//bar/./baz',
    output: '/foo/bar/baz',
  },
  1: {
    input: '/../../foo/../../../',
    output: '/',
  },
  2: {
    input: '/./foo/bar/baz/../../.',
    output: '/foo',
  },
  3: {
    input: '/foo/bar/baz',
    output: '/foo/bar/baz',
  },
  4: {
    input: '/foo/bar//////////baz',
    output: '/foo/bar/baz',
  },
  5: {
    input: '../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../../foo',
    output: '../../../../../../../../foo',
  },
  6: {
    input: '../../../this////one/./../../is/../../going/../../to/be/./././../../../just/eight/double/dots/../../../../../../',
    output: '../../../../../../../..'
  }
}

export default tests;