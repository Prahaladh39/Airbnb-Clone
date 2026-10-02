import { calculateDiscount } from './mathUtil';

describe('calculateDiscount', () => {
  test('calculates correct discount for typical values', () => {
    expect(calculateDiscount(200, 15)).toBeCloseTo(170);
  });

  test('returns original price when discount is 0', () => {
    expect(calculateDiscount(123.45, 0)).toBeCloseTo(123.45);
  });

  test('returns 0 when discount is exactly 100%', () => {
    expect(calculateDiscount(500, 100)).toBe(0);
  });

  test('returns 0 when discount is greater than 100%', () => {
    expect(calculateDiscount(500, 150)).toBe(0);
  });

  test('handles price of 0 correctly', () => {
    expect(calculateDiscount(0, 50)).toBe(0);
  });

  test('throws error for negative price', () => {
    expect(() => calculateDiscount(-10, 10)).toThrow('Values cannot be negative');
  });

  test('throws error for negative discount', () => {
    expect(() => calculateDiscount(100, -5)).toThrow('Values cannot be negative');
  });

  test('handles floating point precision', () => {
    const result = calculateDiscount(0.1, 10);
    expect(result).toBeCloseTo(0.09);
  });
});