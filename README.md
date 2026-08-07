### Discount Calculation Function
#### `calculateDiscount`
```markdown
#### Parameters
* `price`: The original price of the item.
* `discountPercentage`: The percentage discount to apply.

#### Returns
The price after applying the discount.

#### Throws
An `Error` if `price` or `discountPercentage` is negative.

#### Notes
If `discountPercentage` is 100 or more, the function returns 0, indicating the item is free.
```