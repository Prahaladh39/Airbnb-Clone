### Security Notice

The `getUser` function still constructs SQL queries via string concatenation:

```js
const query = "SELECT * FROM users WHERE id = " + userId;
```

**Recommendation:** Refactor this to use parameterized queries (e.g., prepared statements) or an ORM to eliminate the risk of SQL injection.