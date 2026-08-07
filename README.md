### Security Notice
The provided code contains a security vulnerability due to raw SQL string concatenation. 

### Vulnerable Code
```javascript
const query = "SELECT * FROM users WHERE id = " + userId;
```
### Recommendations
* Use parameterized queries to prevent SQL injection attacks.
* Keep AWS keys and secret keys secure, do not hard-code them.
* Utilize environment variables or a secure secrets management system. 

### Example of Secure Query
```javascript
const query = "SELECT * FROM users WHERE id = $1";
db.execute(query, [userId]);
```