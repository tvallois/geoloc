const db = require('../models/db');

exports.getUserByEmail = function (email) {
  const emailQuery = 'SELECT * FROM users WHERE email = $1';
  return db.query(emailQuery, [email])
    .then(function(res) {return res.rows[0];})
    .catch(function(err) {return err;})
};
