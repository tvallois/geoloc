const db = require('../models/db');

exports.getUserByEmail = function (email) {
  const query = 'SELECT * FROM users WHERE email = $1';
  return db.query(query, [email])
    .then(res => res.rows[0])
    .catch(err => err);
};

exports.getUserById = function (id) {
  const query = 'SELECT * from users WHERE id = $1';
  return db.query(query, [id])
    .then(res => res.rows[0])
    .catch((err) => {
      console.log(err);
      return err;
    });
};

exports.addNewUser = function (body) {
  const query = 'INSERT INTO users(id, login, email, password) VALUES ($1, $2, $3, $4)';
  return db.query(query, [body.id, body.login, body.email, body.password])
    .then((res) => {
      const data = {
        rowCount: res.rowCount,
        user: res.rows[0],
      };
      return data;
    })
    .catch(err => err);
};

exports.deleteUser = function (id) {
  const query = 'DELETE FROM users WHERE id = $1';
  return db.query(query, [id])
    .then(res => res.rowCount)
    .catch(err => err);
};

exports.updateUser = function (id, body) {
  let query = 'UPDATE users SET';
  for (const key of Object.keys(body)) {
    if (key !== 'email' || key !== 'login' || key !== 'password') {
      continue;
    } else {
      query += ' '
    }
  }
}
