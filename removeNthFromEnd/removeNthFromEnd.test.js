const { removeNthFromEnd, LinkedList } = require('./removeNthFromEnd');


describe('edge cases', () => {
  test('only one node in LinkedList, n = 1', () => {
    const m0 = new LinkedList(0);
    const res = removeNthFromEnd(m0, 1);
    expect(res).toBeNull()
  });

  test('n greater than length of LinkedList', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0, 7);
    expect([0, 1, 2, 3, 4, 5]).toEqual(res.toArray());
  });

  test('only one node in LL, n greater than length of LinkedList', () => {
    const m0 = new LinkedList(0);
    const res = removeNthFromEnd(m0, 2);
    expect([0]).toEqual(res.toArray());
  });
});

describe('standard cases', () => {
  test('handles falsey input for second parameter by returning input array', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0,)
    expect([0, 1, 2, 3, 4, 5]).toEqual(res.toArray());
  });

  test('removes last node', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0, 1);
    expect([0, 1, 2, 3, 4]).toEqual(m0.toArray());
  });

  test('removes 2nd to last node', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0, 2);
    expect([0, 1, 2, 3, 5]).toEqual(m0.toArray());
  });

  test('removes 3rd to last node', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0, 3);
    expect([0, 1, 2, 4, 5]).toEqual(res.toArray());
  });

  test('removes 4th to last node', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0, 4);
    expect([0, 1, 3, 4, 5]).toEqual(res.toArray());
  });

  test('removes first node', () => {
    const m0 = new LinkedList(0);
    const m1 = m0.add(1);
    const m2 = m1.add(2);
    const m3 = m2.add(3);
    const m4 = m3.add(4);
    const m5 = m4.add(5);
    const res = removeNthFromEnd(m0, 6);
    expect([1, 2, 3, 4, 5]).toEqual(res.toArray());
  });
});


