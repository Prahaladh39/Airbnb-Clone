export function calculateDiscount(price, discountPercentage) {
    if (price < 0 || discountPercentage < 0) {
        throw new Error("Values cannot be negative");
    }
    if (discountPercentage > 100) {
        return 0; // 100% or more discount means free
    }
    const discountAmount = price * (discountPercentage / 100);
    return price - discountAmount;
}
