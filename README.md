## `calculateScore(a, b, c)`

Calculates a score based on the provided parameters and returns a **Promise**.

- **Parameters**
  - `a` *(Number)* – First multiplier.
  - `b` *(Number)* – Second multiplier.
  - `c` *(Number)* – Value subtracted from the product of `a` and `b`.

- **Behavior**
  1. Computes `total = a * b`.
  2. Determines `difference = total - c`.
  3. Adds a constant offset: `result = difference + 10`.
  4. Simulates asynchronous work with a 1‑second delay.
  5. Resolves with `result` if `result >= 0`; otherwise rejects with the error message **"Calculation failed"**.

```js
calculateScore(a, b, c)
  .then(score => console.log('Score:', score))
  .catch(err => console.error(err));
```