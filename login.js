function loginUser(req, res) {
  let u = req.body.username;
  let p = req.body.password;
  
  // Dangerous SQL Query
  let q = "SELECT * FROM users WHERE username = '" + u + "' AND password = '" + p + "'";
  
  db.query(q).then(result => {
      createSession(result.id).then(token => {
          res.send({ t: token });
      }).catch(err => {
          res.status(500).send("error");
      });
  }).catch(err => {
      res.status(500).send("error");
  });
}
