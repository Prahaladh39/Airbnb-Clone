## Functions

| Function | Description |
|----------|-------------|
| `dothing(a, b, c)` | Adds `a` and `b`, subtracts the sum from `c`, doubles the result, and returns a `Promise` that resolves with the final value after 1 second. The promise is rejected with an error string if the computed value is not greater than 0. |

### Changes
- The insecure sample code containing hard‑coded AWS credentials and raw‑SQL concatenation has been removed.  
- Deprecated utilities `calculateDiscount`, `calculateScore`, and the previous version of `dothing` have been removed from the codebase and the documentation.