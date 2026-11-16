const { calculateTotal } = require('./cart');

test('tühi ostukorv maksab 0 eurot', () => {
  expect(calculateTotal([])).toBe(0);
});
test('üks toode koos saatmiskuluga', () => {
  expect(calculateTotal([{ price: 20, qty: 2 }])).toBe(45);
});
test('mitme toote kogusumma koos saatmiskuluga', () => {
  expect(calculateTotal([
    { price: 10, qty: 3 },
    { price: 25, qty: 2 }
  ])).toBe(85);
});
test('STUDENT10 annab 10% allahindlust', () => {
  expect(calculateTotal(
    [{ price: 100, qty: 1 }],
    'STUDENT10'
  )).toBe(90);
});
test('99 euro suurusele ostule lisandub saatmiskulu', () => {
  expect(calculateTotal([{ price: 99, qty: 1 }])).toBe(104);
});
test('100 euro suurusele ostule on saatmine tasuta', () => {
  expect(calculateTotal([{ price: 100, qty: 1 }])).toBe(100);
});