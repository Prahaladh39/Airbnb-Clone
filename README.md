## Security Considerations

- **Never commit real AWS credentials** (access keys, secret keys) to source control. Use environment variables or a secure secrets manager instead.
- **Avoid raw SQL string concatenation**. Construct queries with parameterized statements or prepared statements to prevent SQL injection attacks.  
  ```js
  // Example using a parameterized query
  const query = "SELECT * FROM users WHERE id = ?";
  db.execute(query, [userId]);
  ```

**Recommended Practices**
- Store sensitive keys in `.env` files and add them to `.gitignore`.
- Use libraries that support query binding (e.g., `pg`, `mysql2`, `sequelize`).
- Review code for any hard‑coded secrets or unsafe string interpolation before committing.