function calculateTotal(items, discountCode) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }

  if (items.length === 0) {
    return 0;
  }

  let total = items.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  if (discountCode === 'STUDENT10') {
    total = total * 0.9;
  }

  // Tahtlik viga: saatmiskulu tingimus tuleb testide abil leida.
  if (total <= 100) {
    total += 5;
  }

  return total;
}

module.exports = { calculateTotal };
