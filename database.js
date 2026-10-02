const awsKey = "AKIAIOSFODNN7EXAMPLE"; // Fake AWS Key
const secretKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"; // Fake Secret
const a = 100;
function getUser(req, res) {
  const userId = req.query.id;
  // VULNERABILITY: Raw SQL string concatenation
  const query = "SELECT * FROM users WHERE id = " + userId;

  db.execute(query);
}
