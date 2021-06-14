//we named the file like that so jest recdognizes it
//require the js file
const {add, sub} = require('./calculator');

test('adds 4 + 5 to equal 9', () => {
    expect(add(4, 5)).toBe(9);
  });

  test('sub 10 - 5 to equal 5', () => {
    expect(sub(10, 5)).toBe(5);
  });

  test('mul 10 * 5 to equal 78', () => {
    expect(mul(10, 5)).toBe(78);
  });