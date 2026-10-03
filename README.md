## Security Improvements

- **Removed hard‑coded AWS credentials** – the previous `awsKey` and `secretKey` constants have been deleted.
- **Eliminated raw SQL concatenation** – the insecure `getUser` function that built queries with string interpolation has been removed to prevent SQL injection attacks.  

These changes enhance the project's security posture by eliminating exposed secrets and unsafe database access patterns.