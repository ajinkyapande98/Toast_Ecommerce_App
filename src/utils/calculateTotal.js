export function calculateTotal(cartItems) {
  if (!cartItems) {
    return 0;
  }
  return cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
