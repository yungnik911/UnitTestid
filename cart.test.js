const { calculateTotal } = require('./cart');

test('tühi ostukorv maksab 0 eurot', () => {
  expect(calculateTotal([])).toBe(0);
});
