import { calculateDiscount } from './mathUtil.js';

describe('calculateDiscount function', () => {
  it('should return the discounted price when given a valid price and discount percentage', () => {
    const price = 100;
    const discountPercentage = 10;
    const expectedDiscountedPrice = 90;
    expect(calculateDiscount(price, discountPercentage)).toBe(expectedDiscountedPrice);
  });

  it('should return 0 when the discount percentage is 100 or more', () => {
    const price = 100;
    const discountPercentage = 100;
    const expectedDiscountedPrice = 0;
    expect(calculateDiscount(price, discountPercentage)).toBe(expectedDiscountedPrice);
  });

  it('should throw an error when the price is negative', () => {
    const price = -100;
    const discountPercentage = 10;
    expect(() => calculateDiscount(price, discountPercentage)).toThrow('Values cannot be negative');
  });

  it('should throw an error when the discount percentage is negative', () => {
    const price = 100;
    const discountPercentage = -10;
    expect(() => calculateDiscount(price, discountPercentage)).toThrow('Values cannot be negative');
  });

  it('should return the original price when the discount percentage is 0', () => {
    const price = 100;
    const discountPercentage = 0;
    const expectedDiscountedPrice = 100;
    expect(calculateDiscount(price, discountPercentage)).toBe(expectedDiscountedPrice);
  });
});