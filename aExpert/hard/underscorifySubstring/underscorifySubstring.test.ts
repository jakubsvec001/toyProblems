import underscorifySubstring from './underscorifySubstring';

describe('underscorifySubstring', () => {
  it('0', () => {
    const test = 'testthis is a testtest to see if testestest it works'
    expect(underscorifySubstring(test, 'test')).toBe('_test_this is a _testtest_ to see if _testestest_ it works');
  });
  it('1', () => {
    const test = 'thisonion is a oniononion to see on if onionionion it onionon works onion'
    expect(underscorifySubstring(test, 'onion')).toBe('this_onion_ is a _oniononion_ to see on if _onionionion_ it _onion_on works _onion_');
  });
  it('2', () => {
    const test = 'testthis is a testtest to see if testestest it works'
    expect(underscorifySubstring(test, 'dfsdfdefd')).toBe('testthis is a testtest to see if testestest it works');
  });
})