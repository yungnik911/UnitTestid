const { isValidPassword } = require('./password');

test('8 märki on lubatud', () => {
  expect(isValidPassword('abcdefgh')).toBe(true);
});
