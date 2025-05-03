export function formatPrice(value, currency = 'USD') {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
    }).format(value);
  }
  