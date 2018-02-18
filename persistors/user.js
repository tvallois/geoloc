const db = require('../models/db');

exports.getUserByEmail = async function (email) {
  try {
    const emailQuery = 'SELECT * FROM users WHERE email = $1';
    const res = await db.query(emailQuery, [email]);
    console.log(res.rows[0]);
    return res.rows[0];
  } catch (err) {
    console.log(err.stack);
    return err;
  }
};
