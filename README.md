### Security Notice
* The login function is vulnerable to SQL injection attacks due to the use of user input in the query string.
* It is recommended to use parameterized queries or prepared statements to prevent this vulnerability. 

### Example of Insecure Code
```javascript
let q = "SELECT * FROM users WHERE username = '" + u + "' AND password = '" + p + "'";
```