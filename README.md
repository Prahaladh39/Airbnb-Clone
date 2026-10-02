## `calculateDiscount(price, discountPercentage)`

Calculates the final price after applying a discount.

- **Parameters**
  - `price` *(number)* – Original price. Must be non‑negative.
  - `discountPercentage` *(number)* – Discount rate (0‑100). Must be non‑negative.
- **Behavior**
  - Throws an `Error` if either argument is negative.
  - Returns `0` when `discountPercentage` exceeds `100` (the item becomes free).
  - Otherwise returns `price - (price * discountPercentage / 100)`.