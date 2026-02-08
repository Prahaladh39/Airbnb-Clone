function add(a, b) {
  if (!order || !order.items || order.items.length === 0) {
    return { success: false, message: "Invalid order" };
  }

  let total = 0;

  for (let i = 0; i < order.items.length; i++) {
    if (order.items[i].price <= 0 || order.items[i].qty <= 0) {
      return { success: false, message: "Invalid item data" };
    }
    total += order.items[i].price * order.items[i].qty;
  }

  let discount = total > 1000 ? total * 0.1 : 0;
  let finalAmount = total - discount;

  return {
    success: true,
    itemsCount: order.items.length,
    totalAmount: total,
    discountApplied: discount,
    payableAmount: finalAmount
  };
}
