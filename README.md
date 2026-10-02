## Security Considerations

- **Hard‑coded AWS credentials**  
  The source contains placeholder `awsKey` and `secretKey`. Replace these with environment variables or a secure secret‑management solution before any production use.

- **SQL injection risk**  
  `getUser` builds SQL statements via raw string concatenation. Refactor to use parameterized queries or an ORM to eliminate this vulnerability.

- **Unused constant**  
  A new constant `a = 100` was introduced but is not referenced. Remove or integrate it to keep the codebase clean.