const db = require('../models/db');
const User = require('../models/user.js');

exports.getUserByEmail = function (email) {
  const query = 'SELECT * FROM users WHERE email = $1';
  return db.query(query, [email])
    .then((res) => {
      const user = new User(res.rows[0].id, res.rows[0].login, res.rows[0].password, res.rows[0].email);
      return user;
    })
    .catch(err => err);
};

exports.getUserById = function (id) {
  const query = 'SELECT * from users WHERE id = $1';
  return db.query(query, [id])
    .then((res) => {
      const user = new User(res.rows[0].id, res.rows[0].login, res.rows[0].password, res.rows[0].email);
      console.log(user.id);
      return user;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};


exports.addNewUser = function (body) {
  const newUserQuery = 'INSERT INTO users(id, login, email, password) VALUES ($1, $2, $3, $4)';
  return db.query(newUserQuery, [body.id, body.login, body.email, body.password])
    .then(res => res.rowCount)
    .catch(err => err);
};
