### `add(order)`
Calculates the total amount for a given order, applying a conditional discount, and returns a detailed breakdown.

-   `order`: An object representing the customer order. It must contain an `items` array. Each item within the `items` array must have `price` (a positive number) and `qty` (a positive number) properties.

Returns an object with the following properties:
-   `success` (boolean): Indicates whether the order calculation was successful.
-   `message` (string, optional): An error description if `success` is `false`. Possible messages include "Invalid order" or "Invalid item data".
-   `itemsCount` (number, present if `success` is `true`): The total number of items in the order.
-   `totalAmount` (number, present if `success` is `true`): The sum of `price * qty` for all items, before any discounts.
-   `discountApplied` (number, present if `success` is `true`): The discount amount applied. A 10% discount is applied if `totalAmount` exceeds `1000`; otherwise, the discount is `0`.
-   `payableAmount` (number, present if `success` is `true`): The final amount to be paid after discount.

**Example Usage:**
```javascript
const exampleOrder = {
  id: "ORD456",
  items: [
    { productId: "PROD001", price: 250, qty: 3 },
    { productId: "PROD002", price: 100, qty: 2 }
  ]
};

const result = add(exampleOrder);
// Example successful return:
// {
//   success: true,
//   itemsCount: 2,
//   totalAmount: 950,
//   discountApplied: 0,
//   payableAmount: 950
// }

const invalidOrder = {};
const errorResult = add(invalidOrder);
// Example error return:
// {
//   success: false,
//   message: "Invalid order"
// }
```